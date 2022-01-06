import React, { useState } from "react";
import Project from "../Project";

function Portfolio({ title }) {
    const [projects] = useState([
        {
            name: "Food Store",
            description: "It is a webportal to buy food.",
            appLink: "",
            repoLink: "",
        },
        {
            name: "Tours and Travel",
            description: "It is a webportal to organize tours.",
            appLink: "",
            repoLink: "",
        },
        {
            name: "Time Store",
            description: "It is a webportal to buy timber.",
            appLink: "",
            repoLink: "",
        },
        {
            name: "AirBnB",
            description: "It is a webportal to book homes.",
            appLink: "",
            repoLink: "",
        },
        {
            name: "Landscaping",
            description:
                "It is a webportal to organize your landscaping needs.",
            appLink: "",
            repoLink: "",
        },
    ]);

    return (
        <div>
            <h1>{title}</h1>
            <div className="flex-row">
                {projects.map((project, i) => (
                    <Project
                        key={project.name}
                        projectInfo={project}
                        imageId={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
