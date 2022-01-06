import React from "react";
import Navigation from "../Navigation";

function Header({ menuItems, activeItem, setActiveItem }) {
    return (
        <header data-testid="header" className="flex-row space-between px-2">
            <Navigation
                menuItems={menuItems}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
        </header>
    );
}

export default Header;
