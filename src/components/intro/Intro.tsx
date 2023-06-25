import React from 'react';
import {StyledText, StyledTitle } from '../reusable/Styles';
import './Intro.css'
import './../Components.css'

type Props = {
    onClickExplore?: React.MouseEventHandler;
};

const Intro: React.FC<Props> = ({ onClickExplore}) => {
    return (
        <header className={'content'}>
            <div className={'text-div'}>
                <StyledText>Hello! My name is </StyledText>
                <StyledTitle>Josephine </StyledTitle>
            </div>

        </header>
    );
};

export default Intro;