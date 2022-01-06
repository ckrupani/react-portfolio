import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../";

afterEach(cleanup);

describe("Contact is rendering", () => {
    it("renders", () => {
        render(<Contact title={"Contact"} />);
    });

    it("matches the snapshot", () => {
        const { asFragment } = render(<Contact title={"Contact"} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("has correct header", () => {
        render(<Contact title={"Contact"} />);
        expect(screen.getByTestId("contactForm")).toHaveTextContent("Contact");
    });

    it("has label for submit button", () => {
        render(<Contact title={"Contact"} />);
        expect(screen.getByTestId("submitButton")).toHaveTextContent("Submit");
    });
});
