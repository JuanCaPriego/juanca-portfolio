function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, content: raw };
  const [, frontmatter, content] = match;
  const data = {};
  frontmatter.split(/\r?\n/).forEach((line) => {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) return;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, '');
    data[key] = value;
  });
  return { data, content: content.trim() };
}

const postModules = import.meta.glob('../content/hobbies/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png}', { eager: true });

const coverByFilename = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => [path.split('/').pop(), mod.default])
);

function slugify(filePath) {
  return filePath.split('/').pop().replace(/\.md$/, '');
}

function parseTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;
  return String(tags)
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export const hobbyPosts = Object.entries(postModules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = slugify(path);
    return {
      slug,
      title: data.title || slug,
      date: data.date ? new Date(data.date) : null,
      excerpt: data.excerpt || '',
      tags: parseTags(data.tags),
      cover: data.cover ? coverByFilename[data.cover] : undefined,
      content,
    };
  })
  .sort((a, b) => (b.date ?? 0) - (a.date ?? 0));

export function getHobbyPost(slug) {
  return hobbyPosts.find((post) => post.slug === slug);
}
