import React from 'react'
import '../../pages/Pages.css'
import '../styles.css'
import { CustomTag } from '../reusable'
import { ArrowRightOutlined } from '@ant-design/icons'

export interface Experience {
    company: string
    role: string
    date: string
    desc: string | JSX.Element
    techStack?: string[]
    url?: string
}

export interface Props {
    experience: Experience
}

const ExperienceCard: React.FC<Props> = ({experience}) => {
    const tags = experience.techStack && experience.techStack.map((tech, index) => {
        return <CustomTag text={tech} key={index} />
    })
    
  return (
    <div className='responsiveRow'>
        <div className='column left'>
            <h3 className="itemLabel">
                {experience.company}
            </h3>
            <h3 className="label">
                {experience.date}
            </h3>
        </div>
        <div className='column'>
            <div className='responsiveRow' style={{marginBottom: '0.5rem'}}>
                <h3 className="itemLabel itemLabelAccent">
                    {experience.role}
                </h3>
                {experience.url && 
                    <a target="_blank" rel="noopener noreferrer" href={experience.url} style={{margin: 0}}>
                        View Works <ArrowRightOutlined /> 
                    </a>
                }
            </div>
            <p style={{marginTop: '0.5rem'}}>
                {experience.desc}
            </p>

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