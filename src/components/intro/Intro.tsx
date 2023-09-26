import React from 'react';
import {StyledText, StyledTitle } from '../reusable/Styles';
import './Intro.css'
import './../Components.css'
import Fade from 'react-reveal/Fade';

type Props = {
    onClickExplore?: React.MouseEventHandler;
};

const Intro: React.FC<Props> = ({ onClickExplore }) => {

    const picUrl = "https://yt3.googleusercontent.com/ytc/AL5GRJV13YRqFR7oTn6O4v_u9IWbs60Cu8-a7rbSX34g7g=s900-c-k-c0x00ffffff-no-rj"
    
    return (
        <header className={'content'}>
            <div className='content-body'>
                <div className={'text-div'}>
                    <Fade bottom cascade>
                        <StyledText >Hello! I'm </StyledText>
                        <StyledTitle margintop={'0.25rem'}>josephine </StyledTitle>
                        <StyledTitle marginleft={'3rem'}>hemingway </StyledTitle>
                    </Fade>
                </div>
                <img alt='profilepic' className={'profile-img'} src={picUrl}/>
            </div>

        </header>
    );
};

export default Intro;