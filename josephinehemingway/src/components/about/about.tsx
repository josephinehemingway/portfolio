import React from 'react'
import '../styles.css'
import '../../pages/Pages.css'
import { tbpIG, vscoUrl } from '../../static'

export interface SectionProps {
    sectionRef?: React.RefObject<HTMLDivElement>
    onClickNextSection?: () => void
}

const About: React.FC<SectionProps> = ({sectionRef}) => {
  return (
        <div ref={sectionRef}>
            <h3 className="accent">
                I love creating nice things that make an impact.
            </h3>
            <p>
                I'm passionate about many things, especially when design intersects with technology to solve problems. 
                <b className='bold'>{' '} Seeing my ideas come to life is what truly captivates me.</b>
            </p>
            <p>
                When I'm not working, I spend my spare time learning, playing sports and pursuing my artistic interests through creative projects in 
                <a href={tbpIG} target="_blank" rel="noopener noreferrer">{' '} floral design</a>, 
                <a href={vscoUrl} target="_blank" rel="noopener noreferrer">{' '} photography{' '} </a> and 
                exploring various art mediums. 
            </p>
        </div>
  )
}

export default About