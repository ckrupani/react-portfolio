import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <About />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
