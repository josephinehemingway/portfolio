import React, { RefObject, useRef, useState } from "react";
import "./Pages.css";
import Navbar from "../components/nav/navbar/Navbar";
import Jo from "../assets/images/jo.webp"
import ExperienceSection from "../components/experiences/ExperienceSection";
import { portfolio } from "../static";
import About from "../components/about/about";
import { NavLink } from "../components/reusable";
import ProjectsWrapper from "../components/projectsWrapper/projectsWrapper";

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
                View Portfolio
            </h3>
            {
                Object.values(portfolio).map((p, index) => {
                    const handleClick = () => {
                        setSelectedPortfolio(p)
                        onClickSection(experienceRef)
                    }
                    return (
                        <NavLink 
                            key={index}
                            onClick={handleClick}
                            port={p}
                            selectedPortfolio={selectedPortfolio}
                        />
                    )
                })
            }
        </div>
    )

    const contactInfo = (
        <div className="portfolio">
            <h3 className="accent">
                Thanks for visiting my site! 
            </h3>
            <p style={{margin: '0.5rem 0'}}>I'd love to hear from you.</p>

            <a target="_blank" rel="noopener noreferrer" href="mailto:josephine.hemingway@gmail.com">
                Contact me
            </a>
        </div>
    )

    return (
        <>
            <Navbar 
                onClickAbout={() => onClickSection(aboutRef)} 
                onClickExperience={() => onClickSection(experienceRef)} 
                onClickProjects={() => onClickSection(projectsRef)} 
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
            <ProjectsWrapper experienceType={selectedPortfolio} sectionRef={projectsRef} />
            <div className="footer">
                {portfolioLinks}
                {contactInfo}
            </div>
        </>
    );
};

export default Home;
