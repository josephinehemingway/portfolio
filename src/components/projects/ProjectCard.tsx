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
        </div>
    </div>
  )
}

export default ProjectCard