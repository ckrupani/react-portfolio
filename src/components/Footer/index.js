import React from "react";

function Footer() {
    return (
        <footer>
            <ul className="flex-row flex-center">
                <li className="mx-2">
                    <a
                        href="https://github.com/ckrupani"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </li>
                <li className="mx-2">
                    <a
                        href="https://au.linkedin.com/in/chirag-rupani-3309a835"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li className="mx-2">
                    <a
                        href="https://twitter.com/ckrupani"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
