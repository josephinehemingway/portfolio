import React, { RefObject, useRef, useState } from "react";
import "./Pages.css";
import Navbar from "../components/nav/navbar/Navbar";
import Jo from "../assets/images/jo.png"
import ExperienceSection from "../components/experiences/ExperienceSection";
import { portfolio } from "../static";
import ProjectsSection from "../components/projects/ProjectsSection";
import About from "../components/about/about";
import { NavLink } from "../components/reusable";

export interface SectionProps {
    sectionRef: React.RefObject<HTMLDivElement>
    onClickNextSection?: () => void
}

const Home = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);

    const [selectedPortfolio, setSelectedPortfolio] = useState<portfolio>(portfolio.SoftwareEngineering)

    const onClickSection = (ref: RefObject<HTMLDivElement>) => {
		const node: HTMLDivElement | null = ref.current;
		window.scrollTo({ top: node!.offsetTop, left: 0, behavior: "smooth" });
	}

    const portfolioLinks = (
        <>
            <h3 className="accent" style={{marginTop: '3rem'}}>
                Select Portfolio
            </h3>
            {
                Object.values(portfolio).map((p) => (
                    <NavLink 
                        onClick={() => setSelectedPortfolio(p)}
                        port={p}
                        selectedPortfolio={selectedPortfolio}
                    />
                ))
            }
        </>
    )

    return (
        <>
            <Navbar 
                onClickAbout={() => onClickSection(aboutRef)} 
                onClickExperience={() => onClickSection(experienceRef)} 
                onClickProjects={() => onClickSection(projectsRef)} 
                onClickResume={() => onClickSection(aboutRef)} 
            />
            <div className="page first">
                <div className="responsiveRow">
                    <div className="column left">
                        <img className='illustration' src={Jo} />

                        <div className="name">
                            josephine hemingway
                        </div>
                        <h3 className="subtitle">
                            Hi! I am a 
                        </h3>
                        <h3 className="subtitle">
                            Software Engineer /
                        </h3>
                        <h3 className="subtitle">
                            Entrepreneur / 
                        </h3>
                        <h3 className="subtitle">
                            Designer
                        </h3>

                        {portfolioLinks}
                    </div>

                    <div className="column">
                        <About sectionRef={aboutRef}/>

                        {/* <ProjectsSection sectionRef={projectsRef}/> */}

                        <ExperienceSection experienceType={selectedPortfolio} sectionRef={experienceRef}/>

                        {/* <a>
                            View Projects 
                            <ArrowRightOutlined className="icon"/>
                        </a> */}
                    </div>
                </div>
            </div>
            <div className="page" ref={projectsRef}>
                <ProjectsSection sectionRef={projectsRef}/>
            </div>
        </>
    );
};

export default Home;
