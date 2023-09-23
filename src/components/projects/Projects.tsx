import React from "react";
import { StyledTitle } from "../reusable/Styles";
import "./Projects.css";
import "./../Components.css";
import ProjectCard from "./ProjectCard";
import Travel1 from "../../assets/images/projects/travel/travel1.png";
import Fade from "react-reveal/Fade";

const Projects = () => {
    return (
        <header className={"content-start"}>
            <div className={"text-div"}>
                <Fade bottom cascade>
                    <StyledTitle marginbottom="6rem">Projects </StyledTitle>
                    <ProjectCard
                        title="Travel.io"
                        imgUrl={Travel1}
                        desc="Travel.io is an travel web application that helps busy travellers plan their itinerary."
                    />
                </Fade>
            </div>
        </header>
    );
};

export default Projects;
