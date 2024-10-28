import React from 'react'
import { designExperience, floristExperience, portfolio, sweExperience, tbpPics, tbpUrl } from '../../static'
import ExperienceCard from './experienceCard'
import { SectionProps } from '../about/about'
import { Fade } from "react-awesome-reveal";
import { ArrowRightOutlined } from '@ant-design/icons';
import EducationCard from './educationCard';

interface Props extends SectionProps {
    experienceType: portfolio
}

const ExperienceSection: React.FC<Props> = (props) => {

    let experiences, tbpBanner

    switch(props.experienceType) {
        case portfolio.SoftwareEngineering:
            experiences = sweExperience
            break
        case portfolio.Design:
            experiences = designExperience
            break
        case portfolio.Entrepreneurship:
            experiences = floristExperience
            break
        // case portfolio.Photography:
        default:
            experiences = sweExperience

    }

    if (props.experienceType === portfolio.Entrepreneurship) {
        tbpBanner = <div className='column'>
            <div className='responsiveRow'>
                {tbpPics.map((url, index) => (
                    <img
                        key={index}
                        className='tbpBanner'
                        src={url}
                        alt=""
                    />
                ))}
            </div>

            <a href={tbpUrl} target="_blank" rel="noopener noreferrer">
                View The Blooming Palette Shop <ArrowRightOutlined /> 
            </a>
        </div>

    }
        
    const experienceCards = experiences.map((exp, index) => {
        return <ExperienceCard
            key={index}
            experience={exp}
        />
    })

    return (
        <div ref={props.sectionRef}>
            <h3 className="sectionHeading">
                EDUCATION 
            </h3>

            <Fade cascade damping={0.2}>
                <EducationCard />
            </Fade>

            <h3 className="sectionHeading">
                EXPERIENCE / <b className='accent'>{props.experienceType.toLowerCase()}</b>
            </h3>

            <Fade cascade damping={0.2}>
                {experienceCards}
            </Fade>

            {tbpBanner}

        </div>
    )
}

export default ExperienceSection