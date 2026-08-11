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

const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png}', { eager: true });

const coverByFilename = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => [path.split('/').pop(), mod.default])
);

// `new Date("YYYY-MM-DD")` parses as UTC midnight, which shifts to the
// previous day (or year, near a boundary) once displayed in any timezone
// behind UTC. Parse the components directly as local time instead.
function parseLocalDate(dateStr) {
  if (!dateStr) return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (!match) return new Date(dateStr);
  const [, y, m, d] = match;
  return new Date(Number(y), Number(m) - 1, Number(d));
}

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

// Turns a set of glob-loaded raw markdown files into sorted, parsed post
// objects. Any extra frontmatter fields (e.g. repo/demo on projects) pass
// through untouched via the ...data spread.
function buildPosts(modules) {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      const slug = slugify(path);
      return {
        ...data,
        slug,
        title: data.title || slug,
        date: parseLocalDate(data.date),
        excerpt: data.excerpt || '',
        tags: parseTags(data.tags),
        cover: data.cover ? coverByFilename[data.cover] : undefined,
        content,
      };
    })
    .sort((a, b) => (b.date ?? 0) - (a.date ?? 0));
}

const hobbyModules = import.meta.glob('../content/hobbies/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const hobbyPosts = buildPosts(hobbyModules);

export function getHobbyPost(slug) {
  return hobbyPosts.find((post) => post.slug === slug);
}

const projectModules = import.meta.glob('../content/projects/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const projectPosts = buildPosts(projectModules);

export function getProjectPost(slug) {
  return projectPosts.find((post) => post.slug === slug);
}
