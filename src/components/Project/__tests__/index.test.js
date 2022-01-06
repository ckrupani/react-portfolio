import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Project from "../";

afterEach(cleanup);

describe("Project is rendering", () => {
    const projectInfo = {
        name: "Food Store",
        description: "It is a webportal to buy food.",
        appLink: "",
        repoLink: "",
    };

    it("renders", () => {
        render(<Project projectInfo={projectInfo} imageId={0} />);
    });

    it("matches the snapshot", () => {
        const { asFragment } = render(
            <Project projectInfo={projectInfo} imageId={0} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
