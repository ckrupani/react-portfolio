import React from "react";

function Navigation() {
    return (
        <>
            <h2 className="header">
                <a data-testid="link" href="/">
                    Chirag
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${"navActive"}`}>
                        <span>Portfolio</span>
                    </li>
                    <li className={`mx-2 ${"navActive"}`}>
                        <span>Contact</span>
                    </li>
                    <li className={`mx-2 ${"navActive"}`}>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;
