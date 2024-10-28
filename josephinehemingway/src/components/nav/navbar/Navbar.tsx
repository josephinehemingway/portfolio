import React from 'react';
import './Navbar.css'
import { useScrollDirection } from '../utils'
import Logo from '../../../assets/images/logo.png'

interface Props {
    onClickAbout: () => void
    onClickExperience: () => void
    onClickProjects: () => void
    onClickResume: () => void
}

const Navbar: React.FC<Props> = (props) => {

    const scrollDirection = useScrollDirection();
    console.log('aaa', scrollDirection)

    return (
        <div className={`navbar ${scrollDirection === "down" ? "hide" : "show"}`} >
            <img className='logo' src={Logo}/>
            <div className='nav-list'>
                <div className='nav-list-element' onClick={props.onClickAbout}>About</div>
                <div className='nav-list-element' onClick={props.onClickExperience}>Experience</div>
                <div className='nav-list-element' onClick={props.onClickProjects}>Projects</div>
                <div className='nav-list-element' onClick={props.onClickResume}>Resume</div>
            </div>
        </div>
    );
}

export default Navbar;