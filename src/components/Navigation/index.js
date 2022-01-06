import React from "react";

function Navigation({ menuItems, activeItem, setActiveItem }) {
    return (
        <>
            <h2 className="header">
                <a data-testid="link" href="/">
                    Chirag
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {menuItems.map((item, i) => (
                        <li
                            key={item.name}
                            className={`mx-2 ${
                                activeItem.name === item.name && "navActive"
                            }`}
                            onClick={() => setActiveItem(item)}
                        >
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Navigation;
