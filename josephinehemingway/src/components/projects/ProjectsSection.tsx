import React from 'react'
import { SectionProps } from '../about/about'
import ProjectCard from './projectsCard'
import { projects } from '../../static'


const ProjectsSection: React.FC<SectionProps> = (props) => {

    const projectCards = projects.map((proj, index) => {
        return <ProjectCard
            key={index}
            project={proj}
        />
    })

    return (
        <div ref={props.sectionRef} className='column'>
            <h3 className="sectionHeading">
                FEATURED PROJECTS / <b className='accent'>software engineering</b>
            </h3>

            {projectCards}
        </div>
    )
}

export default ProjectsSection