import React from 'react';
import './Navbar.css'
import { useScrollDirection } from '../utils'
import Logo from '../../../assets/images/logo.webp'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

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
                <div className='nav-list-element' onClick={props.onClickProjects}>Gallery</div>
                <Button className='downloadBtn' color='default' variant='filled' onClick={props.onClickResume}>
                    Resume
                    <DownloadOutlined />
                </Button>
            </div>
        </div>
    );
}

export default Navbar;