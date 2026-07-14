import React, { useState } from "react";
import "./Trajectory.css";

// Two interleaved tracks:
// - "career" nodes sit on the main axis (bigger circles)
// - "project" nodes float above, linked down to the axis with a stem
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
    },
    {
        type: "project",
        id: "load-cell-device",
        title: "Fall-Force Load Cell",
        year: "2024",
        desc: "Instrumented load measurement concept: static cordino monitoring (HX711/S-type load cell) and dynamic fall-force capture (high-speed ADC, ESP32, circular buffer).",
    },
    {
        type: "project",
        id: "trekking-pole",
        title: "Trekking Pole Prototype",
        year: "2025",
        desc: "Personal R&D prototype in development — testing and validating a trekking pole design against real alpine use.",
    },
    {
        type: "project",
        id: "hiraeth-trails",
        title: "hiraeth_trails",
        year: "2025",
        desc: "Flutter + Firebase app for logging and sharing trail data, built end-to-end as a personal software project.",
    },
];

const Trajectory = () => {
    const [selected, setSelected] = useState(
        milestones.findIndex((m) => m.type === "career")
    );
    const current = milestones[selected];

    return (
        <div className="trajectory">
            <div className="trajectory-track">
                <div className="trajectory-line" />
                {milestones.map((m, i) => (
                    <button
                        key={m.id}
                        type="button"
                        className={`trajectory-node trajectory-node--${m.type} ${
                            i === selected ? "is-active" : ""
                        }`}
                        style={{ "--slot": i, "--total": milestones.length }}
                        onClick={() => setSelected(i)}
                        aria-pressed={i === selected}
                    >
                        <span className="trajectory-label">
                            {m.type === "career" ? m.org : m.title}
                        </span>
                        <span className="trajectory-dot">
                            <span className="trajectory-dot-highlight" />
                        </span>
                        <span className="trajectory-year">{m.year}</span>
                    </button>
                ))}
            </div>

            <div className="trajectory-detail">
                <div className="trajectory-detail-head">
                    <h3>{current.title}</h3>
                    <span className={`trajectory-badge trajectory-badge--${current.type}`}>
                        {current.type === "career" ? "Career" : "Project"}
                    </span>
                </div>
                {current.type === "career" && (
                    <p className="trajectory-meta">
                        {current.org} · {current.location} · {current.period}
                    </p>
                )}
                <p className="trajectory-desc">{current.desc}</p>
                {current.tags && (
                    <div className="trajectory-tags">
                        {current.tags.map((tag) => (
                            <span key={tag} className="trajectory-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Trajectory;
