import React from "react";

function Project({ projectInfo, imageId }) {
    return (
        <div className="project-wrap">
            <img
                src={require(`../../assets/small/${imageId}.jpg`)}
                alt={projectInfo.name}
                className="img-thumbnail mx-1"
            />
            <div className="project-description">
                <h3>
                    <a
                        href={projectInfo.appLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {projectInfo.name}
                    </a>
                </h3>
                <p>{projectInfo.description}</p>
                <a href={projectInfo.repoLink} target="_blank" rel="noreferrer">
                    Github
                </a>
            </div>
        </div>
    );
}

export default Project;
