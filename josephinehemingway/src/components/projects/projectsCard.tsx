import React from 'react'
import '../../pages/Pages.css'
import '../styles.css'
import { ArrowRightOutlined} from '@ant-design/icons'
import { Carousel, Image } from 'antd'
import { CustomTag } from '../reusable'

export interface Project {
    title: string
    desc: string | JSX.Element
    imgUrls: string[];
    date?: string
    company?: string
    techStack?: string[]
    url?: string;
    moreInfo?: string;
}

export interface Props {
    project: Project
    isMobile?: boolean
}

const ProjectCard: React.FC<Props> = ({ project, isMobile }) => {
    const tags = project.techStack && project.techStack.map((tech) => {
        return <CustomTag text={tech} />
    })

    let moreInfoLink

    if (project.moreInfo) {
        moreInfoLink = <a href={project.moreInfo} target="_blank" rel="noopener noreferrer">here</a>
    }

    return (
        <div className='responsiveRow'>
            <Image.PreviewGroup>
                <Carousel
                    className={ isMobile ? 'mobile' : "thumbnail"}
                    arrows
                >
                    {project.imgUrls.map((url, index) => (
                        <Image
                            loading='lazy'
                            key={index}
                            src={url}
                            alt=""
                            style={{ marginRight: "1rem" }}
                        />
                    ))}
                </Carousel>
            </Image.PreviewGroup>
            
            <div className='column' style={{ marginTop: '1rem', marginRight: isMobile ? '2rem': 0 }}>
                <div className='responsiveRow' style={{marginBottom: '0.5rem'}}>
                    <div className='itemLabel'>
                        {project.title}
                    </div>

                    {project.url && 
                        <a href={project.url} target="_blank" rel="noopener noreferrer" style={{margin: 0}}>
                            View Product Demo <ArrowRightOutlined /> 
                        </a>
                    }
                </div>
                <p className="label">
                    {project.desc} 
                    {moreInfoLink && 
                    <span>
                        {' '} Read more {moreInfoLink}.
                    </span>
                    }
                </p>
                <span className='tagsContainer'>
                    {tags}
                </span>
            </div>
        </div>
    )
}

export default ProjectCard