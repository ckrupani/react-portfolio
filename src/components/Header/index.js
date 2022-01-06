import React from "react";
import Navigation from "../Navigation";

function Header() {
    return (
        <header data-testid="header" className="flex-row space-between px-2">
            <Navigation />
        </header>
    );
}

export default Header;
