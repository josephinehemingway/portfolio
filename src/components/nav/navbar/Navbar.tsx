import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar" >
            <div className='logo'>jh.</div>
            <div className='nav-list'>
                <div className='nav-list-element'>About</div>
                <div className='nav-list-element'>Experience</div>
                <div className='nav-list-element'>Projects</div>
                <div className='nav-list-element'>Resume</div>
            </div>
            <div>
                Contact
            </div>
        </div>
    );
}

export default Navbar;