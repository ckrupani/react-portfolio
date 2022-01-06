import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "..";

afterEach(cleanup);

describe("Header component", () => {
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
            <Header
                menuItems={menuItems}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
        );
    });

    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(
            <Header
                menuItems={menuItems}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
