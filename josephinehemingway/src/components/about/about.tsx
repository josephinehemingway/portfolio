import React from 'react'
import '../styles.css'
import '../../pages/Pages.css'

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
                I'm an individual of many passions, passionate about combining design with technology to solve problems at the intersection of business. 
                <b className='bold'>{' '} Seeing my ideas come to life is what truly captivates me.</b>
            </p>
            <p>
                {/* I started a small home based business when I was 19, and I currently work as a software engineer after college.  */}
                Outside of work, I channel my spare time learning, working on projects, and pursuing my artistic interests through creative projects in floral design, painting, photography and digital art. 
            </p>
        </div>
  )
}

export default About