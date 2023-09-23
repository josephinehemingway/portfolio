import React from 'react'
import { StyledPara, StyledText } from '../reusable/Styles'
import './Projects.css'

type Props = {
    title: string;
    imgUrl: string;
    desc: string;
};

const ProjectCard: React.FC<Props> = ({title, imgUrl, desc}) => {

  return (
    <div className='projectCard'>
        <img className='projectImg' src={imgUrl} alt='url1'/> 
        <div className='projectDetails'>
            <StyledText>{title}</StyledText>
            <StyledPara>{desc}</StyledPara>
            {/*TODO: Add button to link to project*/}
            {/*TODO: Add tech stack*/}
            {/*TODO: Find a font*/}
            {/*TODO: add image carousel for images and ability to preview image */}
        </div>
    </div>
  )
}

export default ProjectCard