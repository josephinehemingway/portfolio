import React from 'react'
import '../../pages/Pages.css'
import '../styles.css'
import { ArrowRightOutlined} from '@ant-design/icons'
import { Carousel, Image } from 'antd'
import { CustomTag } from '../reusable'

export interface Project {
    title: string
    desc: string
    imgUrls: string[];
    date?: string
    company?: string
    techStack?: string[]
    url?: string;
    moreInfo?: string;
}

export interface Props {
    project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    const tags = project.techStack && project.techStack.map((tech) => {
        return <CustomTag text={tech} />
    })
    return (
        <div className='responsiveRow'>
            <div className='imgContainer'>
                <Image.PreviewGroup>
                    <Carousel
                        className="thumbnail"
                        arrows
                    >
                        {project.imgUrls.map((url, index) => (
                            <Image
                                key={index}
                                src={url}
                                alt=""
                                style={{ marginRight: "1rem" }}
                            />
                        ))}
                    </Carousel>
                </Image.PreviewGroup>
            </div>
            <div className='column' style={{ marginTop: '1rem' }}>
                <div className='itemLabel'>{project.title}</div>
                <p className="label">{project.desc}</p>
                <span className='tagsContainer'>
                    {tags}
                </span>
                {
                    project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">View Product Demo <ArrowRightOutlined /> </a>
                }
                {
                    project.moreInfo && <a href={project.moreInfo} target="_blank" rel="noopener noreferrer">More information <ArrowRightOutlined /> </a>
                }
            </div>
        </div>
    )
}

export default ProjectCard