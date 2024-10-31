import React from 'react';
import './Navbar.css'
import { useScrollDirection } from '../utils'
import Logo from '../../../assets/images/logo.webp'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Resume from '../../../assets/Resume 2024.pdf'

interface Props {
    onClickAbout: () => void
    onClickExperience: () => void
    onClickProjects: () => void
}

const Navbar: React.FC<Props> = (props) => {

    const scrollDirection = useScrollDirection();

    return (
        <div className={`navbar ${scrollDirection === "down" ? "hide" : "show"}`} >
            <img className='logo' src={Logo}/>
            <div className='nav-list'>
                <div className='nav-list-element' onClick={props.onClickAbout}>About</div>
                <div className='nav-list-element' onClick={props.onClickExperience}>Experience</div>
                <div className='nav-list-element' onClick={props.onClickProjects}>Gallery</div>
                <a href={Resume} download="JosephineHemingway_Resume2024" target='_blank'>
                    <Button className='downloadBtn' color='default' variant='filled' >
                        Resume
                        <DownloadOutlined />
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default Navbar;