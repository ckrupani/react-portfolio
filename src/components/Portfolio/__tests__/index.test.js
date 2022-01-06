import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Portfolio from "..";

afterEach(cleanup);

describe("Portfolio component", () => {
    it("renders", () => {
        render(<Portfolio title={"Portfolio"} />);
    });

    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Portfolio title={"Portfolio"} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
