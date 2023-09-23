import React from 'react';
import './Pages.css'
import Intro from "../components/intro/Intro";
import Projects from "../components/projects/Projects";
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import Experience from '../components/experience/Experience';

const Home = () => {
    return (
        <div>
            {/*<header>hello</header> // navbar - home about projects experience*/}
            <body className='page'>
                    <Intro/>
                    <Projects/>
                    <Experience/>
            </body>
        </div>
    );
};

export default Home;