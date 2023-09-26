import React from "react";
import "./Pages.css";
import Intro from "../components/intro/Intro";
import Projects from "../components/projects/Projects";
import Experience from "../components/experience/Experience";
import About from "../components/about/About";

const Home = () => {
    return (
        <div>
            {/*<header>hello</header> // navbar - home about projects experience*/}
            <body className="page">
                <Intro />
                <About />
                <Projects />
                <Experience />
            </body>
        </div>
    );
};

export default Home;
