import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
    it("renders", () => {
        render(<About title={"About me"} />);
    });

    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<About title={"About me"} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
