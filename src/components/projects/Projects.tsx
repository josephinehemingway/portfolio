import React from "react";
import {SectionHeader} from "../reusable/Styles";
import "./Projects.css";
import "./../Components.css";
import ProjectCard from "./ProjectCard";
import Travel1 from "../../assets/images/projects/travel/travel1.png";
import Travel2 from "../../assets/images/projects/travel/travel2.png";
import Travel3 from "../../assets/images/projects/travel/travel3.png";
import Travel4 from "../../assets/images/projects/travel/travel4.png";

import Fade from "react-reveal/Fade";

const Projects = () => {
    return (
        <header className={"content-dark"}>
            <div className={"text-div"}>
                <Fade bottom cascade>
                    <SectionHeader marginbottom="2rem">Projects </SectionHeader>
                </Fade>
                <ProjectCard
                    title="Travel.io"
                    imgUrls={[Travel1, Travel2, Travel3, Travel4]}
                    desc="Travel.io is an travel web application that helps busy travellers plan their itinerary."
                />
            </div>
        </header>
    );
};

export default Projects;
