import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Socials from './components/nav/socials/Socials';
import Navbar from "./components/nav/navbar/Navbar";

function App() {
    return (
        <>
            {/*<div className='loading-page'>*/}
            {/*    <svg id='svg-animation' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">*/}
            {/*        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>*/}
            {/*        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>*/}
            {/*        <g id="SVGRepo_iconCarrier">*/}
            {/*            <ellipse className="a" cx="23.9" cy="38.16" rx="1.8" ry="1.74"></ellipse>*/}
            {/*            <path className="a"*/}
            {/*                  d="M22.75,33h2.38c.61,1.76,1.37,2,2.86,1.61l1.17,2c-1.49.94-1.58,2.17,0,3.38L28.07,41.8c-2.05-.77-2.79-.06-2.94,1.7H22.75c-.16-2-1.28-2.3-3-1.7L18.6,39.92c1.53-1.14,1.43-2.26,0-3.36l1.24-2.08C21.46,35,22.56,34.62,22.75,33Z"></path>*/}
            {/*            <path className="a"*/}
            {/*                  d="M23.93,30.62l2-3.42a1.88,1.88,0,0,0-2-2.49,1.79,1.79,0,0,0-1.84,2.49Z"></path>*/}
            {/*            <path className="a"*/}
            {/*                  d="M19.3,11.49a37.42,37.42,0,0,1,9.29,0A33.84,33.84,0,0,1,27.6,23,40.53,40.53,0,0,0,20.4,23a28.26,28.26,0,0,1-1.1-11.49Z"></path>*/}
            {/*            <path className="a"*/}
            {/*                  d="M28.59,11.49a19,19,0,0,0-3.87-6.42c-.76-.71-.87-.81-1.59,0a18.43,18.43,0,0,0-3.83,6.42"></path>*/}
            {/*            <path className="a" d="M27.6,23a14.92,14.92,0,0,1,2.86.77c-.06-1.38-.38-3-2.27-3.52"></path>*/}
            {/*            <path className="a"*/}
            {/*                  d="M19.71,20.25c-1.89.49-2.11,2.12-2.17,3.5A14.92,14.92,0,0,1,20.4,23"></path>*/}
            {/*        </g>*/}
            {/*    </svg>*/}
            {/*    <h1 id='svg-name'>josephine hemingway</h1>*/}
            {/*</div>*/}
            <Navbar/>
            <Socials/>
            <div className='main-page'>
                <Home />
            </div>
        </>
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //     </Routes>
        // </Router>
    );
}

export default App;
