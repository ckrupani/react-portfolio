import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    const [menuItems] = useState([
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
    ]);

    const [activeItem, setActiveItem] = useState(menuItems[0]);

    const menuItemToReactComponentMap = {
        about: <About />,
        contact: <Contact />,
    };

    return (
        <div>
            <Header
                menuItems={menuItems}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
            <main>
                <section>
                    {menuItemToReactComponentMap[activeItem.name]}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
