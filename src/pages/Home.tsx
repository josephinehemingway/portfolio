import React from 'react';
import './Pages.css'
import Intro from "../components/intro/Intro";
import Projects from "../components/projects/Projects";

const Home = () => {
    return (
        <div>
            {/*<header>hello</header> // navbar */}
            <body className='page'>
                <Intro/>
                <Projects/>
                <Intro/>
                <Projects/>
            </body>
        </div>
    );
};

export default Home;