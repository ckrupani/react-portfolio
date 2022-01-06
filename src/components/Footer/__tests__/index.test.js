import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "..";

afterEach(cleanup);

describe("Footer component", () => {
    // First Test
    it("renders", () => {
        render(<Footer />);
    });

    // Second Test
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });
});
