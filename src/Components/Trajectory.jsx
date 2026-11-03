import React from "react";
import "./Trajectory.css";

// A winding "route" timeline: "career" entries are the main camps (larger
// waypoint, org/location/period line), "project" entries are smaller side
// trips slotted in chronologically. Cards alternate left/right of a central
// trail line as you move down the route.
// Edit the data below with your real dates/details — placeholders marked with ⟵

const milestones = [
    {
        type: "career",
        id: "boston-scientific",
        title: "Programming Analyst",
        org: "Boston Scientific",
        location: "Mexico", // ⟵ adjust
        period: "2018-21", // ⟵ adjust to your real dates
        year: "2018",
        desc: "Built and maintained RPA workflows and data pipelines supporting manufacturing and quality operations. First deep exposure to turning messy processes into reliable automation.",
        tags: ["RPA", "Data Engineering", "Automation"],
    },
    {
        type: "project",
        id: "biomedical-thesis",
        title: "Biomedical Eng. Thesis", // ⟵ replace with your actual project name
        year: "2019",
        desc: "Early hardware/software project bridging biomedical engineering coursework with applied instrumentation.", // ⟵ adjust
    },
    {
        type: "career",
        id: "mead-johnson",
        title: "Data Analyst",
        org: "Mead Johnson Nutrition",
        location: "Mexico", // ⟵ adjust
        period: "2021-Now", // ⟵ adjust
        year: "2021",
        desc: "Analyze and model operational and quality data, building tools and dashboards that turn raw data into decisions across the business.",
        tags: ["Data Analysis", "Dashboards", "SQL"],
    }
];

const MilestoneCard = ({ m }) => (
    <div className={`trajectory-content trajectory-content--${m.type}`}>
        <div className="trajectory-content-head">
            <span className="trajectory-year">{m.year}</span>
            <span className={`trajectory-badge trajectory-badge--${m.type}`}>
                {m.type === "career" ? "Career" : "Project"}
            </span>
        </div>
        <h3>{m.type === "career" ? `${m.title} · ${m.org}` : m.title}</h3>
        {m.type === "career" && (
            <p className="trajectory-meta">
                {m.location} · {m.period}
            </p>
        )}
        <p className="trajectory-desc">{m.desc}</p>
        {m.tags && (
            <div className="trajectory-tags">
                {m.tags.map((tag) => (
                    <span key={tag} className="trajectory-tag">
                        {tag}
                    </span>
                ))}
            </div>
        )}
    </div>
);

const Trajectory = () => {
    return (
        <div className="trajectory">
            <p className="trajectory-route-label">The Route</p>
            <div className="trajectory-items">
                <div className="trajectory-spine" aria-hidden="true">
                    <svg viewBox="0 0 100 1200" preserveAspectRatio="none">
                        <path
                            d="M50,0 C10,90 90,150 50,240 C10,330 90,390 50,480 C10,570 90,630 50,720 C10,810 90,870 50,960 C10,1050 90,1110 50,1200"
                            style={{ stroke: "var(--accent-violet)" }}
                        />
                    </svg>
                </div>
                {milestones.map((m, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                        <div key={m.id} className={`trajectory-row ${isLeft ? "is-left" : "is-right"}`}>
                            <div className="trajectory-side">{isLeft ? <MilestoneCard m={m} /> : null}</div>
                            <div className="trajectory-waypoint">
                                <span className={`trajectory-node-dot trajectory-node-dot--${m.type}`} />
                            </div>
                            <div className="trajectory-side">{!isLeft ? <MilestoneCard m={m} /> : null}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Trajectory;
