import React from 'react'
import { drawings, flowerPics, portfolio } from '../../static'
import { SectionProps } from '../about/about'
import ProjectsSection from '../projects/ProjectsSection'
// import TBPGallery from '../gallery/tbpGallery'
import Gallery from '../gallery/Gallery'

interface Props extends SectionProps {
    experienceType: portfolio
}


const ProjectsWrapper: React.FC<Props> = (props) => {
    let projects

    switch (props.experienceType) {
        case portfolio.SoftwareEngineering:
            projects = <ProjectsSection/>
            break
        case portfolio.Design:
            projects = <Gallery title='artworks' imgUrls={drawings}/>
            break
        case portfolio.Entrepreneurship:
            projects =  <Gallery title='floral designs' imgUrls={flowerPics}/>
            break
        // case portfolio.Photography:
        default:
            projects = <ProjectsSection/>
    }

    return (
        <div className='page' ref={props.sectionRef}>{projects}</div>
    )
}

export default ProjectsWrapper