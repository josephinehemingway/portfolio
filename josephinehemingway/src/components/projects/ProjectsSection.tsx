import React from 'react'
import ProjectCard from './projectsCard'
import { mobileProjects, otherProjects, projects } from '../../static'
import { Fade } from 'react-awesome-reveal'


const ProjectsSection: React.FC = () => {

    const projectCards = projects.map((proj, index) => {
        return <ProjectCard
            key={index}
            project={proj}
        />
    })

    const mobileProjectCards = mobileProjects.map((proj, index) => {
        return <ProjectCard
            isMobile={true}
            key={index}
            project={proj}
        />
    })

    const otherProjectCards = otherProjects.map((proj, index) => {
        return <ProjectCard
            isMobile={true}
            key={index}
            project={proj}
        />
    })

    return (
        <div className='column'>
            <h3 className="sectionHeading">
                FEATURED PROJECTS / <b className='accent'>web applications</b>
            </h3>

            <Fade cascade damping={0.2}>
                {projectCards}
            </Fade>

            <h3 className="sectionHeading">
                FEATURED PROJECTS / <b className='accent'>mobile</b>
            </h3>
            
            <Fade cascade damping={0.2}>
                <div className='responsiveRow'>
                    {mobileProjectCards}
                </div>
            </Fade>

            <h3 className="sectionHeading">
                FEATURED PROJECTS / <b className='accent'>others</b>
            </h3>

            <Fade cascade damping={0.2}>
                <div className='responsiveRow'>
                    {otherProjectCards}
                </div>
            </Fade>
        </div>
    )
}

export default ProjectsSection