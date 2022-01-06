import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Resume from "..";

afterEach(cleanup);

describe("Resume component", () => {
    it("renders", () => {
        render(<Resume title={"Resume"} />);
    });

    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Resume title={"Resume"} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("inserts the link to download the resume", () => {
        render(<Resume title={"Resume"} />);

        expect(screen.getByTestId("link")).toHaveTextContent("resume");
    });
});
