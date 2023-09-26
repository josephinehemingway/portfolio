import React from "react";
import {SectionHeader} from "../reusable/Styles";
import "./About.css";
import "./../Components.css";
import Fade from "react-reveal/Fade";

const About = () => {
    return (
        <header className={"content-dark"}>
            <div className={"text-div"}>
                <Fade bottom cascade>
                    <SectionHeader marginbottom="2rem">About </SectionHeader>
                </Fade>
            </div>
        </header>
    );
};

export default About;
