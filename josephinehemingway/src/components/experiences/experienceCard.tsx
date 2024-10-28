import React from 'react'
import '../../pages/Pages.css'
import '../styles.css'
import { CustomTag } from '../reusable'
import { ArrowRightOutlined } from '@ant-design/icons'

export interface Experience {
    company: string
    role: string
    date: string
    desc: string
    techStack?: string[]
    url?: string
}

export interface Props {
    experience: Experience
}

const ExperienceCard: React.FC<Props> = ({experience}) => {
    const tags = experience.techStack && experience.techStack.map((tech) => {
        return <CustomTag text={tech} />
    })
    
  return (
    <div className='responsiveRow'>
        <div className='column left' style={{marginRight: 0}}>
            <h3 className="itemLabel">
                {experience.company}
            </h3>
            <h3 className="label">
                {experience.date}
            </h3>
        </div>
        <div className='column'>
            <h3 className="itemLabel">
                {experience.role}
            </h3>
            <p style={{marginTop: '0.5rem'}}>
                {experience.desc}
            </p>

            {experience.url && 
                <a target="_blank" rel="noopener noreferrer" href={experience.url} >
                    View Works <ArrowRightOutlined /> 
                </a>
            }

            {tags && 
                <span className='tagsContainer'>
                    {tags}
                </span>
            }
        </div>
    </div>
  )
}

export default ExperienceCard