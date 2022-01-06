import React from "react";

function Resume({ title }) {
    return (
        <div>
            <h1>{title}</h1>
            <div className="my-2">
                <span>
                    Download my{" "}
                    <a
                        data-testid="link"
                        href="https://au.linkedin.com/in/chirag-rupani-3309a835"
                        target="_blank"
                        rel="noreferrer"
                    >
                        resume
                    </a>
                </span>
            </div>

            <div className="my-2">
                <h5>Frontend Technologies</h5>
                <ul>
                    <li className="light-color">React</li>
                    <li className="light-color">Redux</li>
                    <li className="light-color">Reselect</li>
                    <li className="light-color">Jest</li>
                </ul>
                <h5>Backend Technologies</h5>
                <ul>
                    <li className="light-color">Java</li>
                    <li className="light-color">NodeJs</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;
