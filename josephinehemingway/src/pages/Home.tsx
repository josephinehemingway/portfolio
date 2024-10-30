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
        <div className="portfolio">
            <h3 className="accent">
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
        </div>
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
                        <div className="responsiveCol">
                            <img className='illustration' src={Jo} />
                            <div className="column" style={{paddingBottom: 0}}>
                                <div className="firstname">
                                    Josephine
                                </div>
                                <div className="name">
                                    Hemingway
                                </div>
                            </div>
                        </div>

                        <div className="hideMobile">
                            {portfolioLinks}
                        </div>
                    </div>

                    <div className="column">
                        <h1> hello there!</h1>
                        <div className={'wrapper'}>
                            <div className={'static'}>I'm</div>
                            <ul className={'dynamic'}>
                                <li><span className={'static'}>a</span> UI developer</li>
                                <li><span className={'static'}>a</span> designer</li>
                                <li><span className={'static'}>an</span> entrepreneur</li>
                                <li><span className={'static'}>an</span> artist</li>
                            </ul>
                        </div>
                        
                        <About sectionRef={aboutRef}/>

                        <div className="showMobile">
                            {portfolioLinks}
                        </div>

                        <ExperienceSection experienceType={selectedPortfolio} sectionRef={experienceRef}/>

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
