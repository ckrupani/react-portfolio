import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navigation from "..";

afterEach(cleanup);

describe("Navigation component", () => {
    const menuItems = [
        {
            name: "about",
            title: "About me",
        },
        { name: "portfolio", title: "Portfolio" },
        { name: "contact", title: "Contact" },
        {
            name: "resume",
            title: "Resume",
        },
    ];
    const activeItem = {
        name: "about",
        title: "About me",
    };
    const setActiveItem = jest.fn();

    it("renders", () => {
        render(
            <Navigation
                menuItems={menuItems}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
        );
    });

    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(
            <Navigation
                menuItems={menuItems}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("inserts the name of the developer", () => {
        render(
            <Navigation
                menuItems={menuItems}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
        );

        expect(screen.getByTestId("link")).toHaveTextContent("Chirag");
    });
});
