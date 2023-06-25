import React from 'react';
import {StyledText, StyledTitle } from '../reusable/Styles';
import './Projects.css'
import './../Components.css'

const Intro = () => {
    return (
        <header className={'content'}>
            <div className={'text-div'}>
                <StyledText>Here are my featured </StyledText>
                <StyledTitle>Projects </StyledTitle>
            </div>
        </header>
    );
};

export default Intro;