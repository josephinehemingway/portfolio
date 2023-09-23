import React from 'react';
import {StyledText, StyledTitle } from '../reusable/Styles';
import './../Components.css'

const Experience = () => {
    return (
        <header className={'content'}>
            <div className={'text-div'}>
                <StyledTitle>Experience </StyledTitle>
                <StyledText>Where I've worked</StyledText>
            </div>
        </header>
    );
};

export default Experience;