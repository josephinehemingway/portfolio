import React from 'react'
import '../../pages/Pages.css'
import '../styles.css'

const EducationCard: React.FC = () => {
    
  return (
    <div className='responsiveRow'>
        <div className='column left' style={{marginRight: 0}}>
            <h3 className="itemLabel">
               Bachelor's Degree (Honors)
            </h3>
            <h3 className="label">
                2019 - 2023
            </h3>
        </div>
        <div className='column'>
            <h3 className="itemLabel">
                Nanyang Technological University, Singapore
            </h3>
            <h3 className="itemLabel">
                Data Science and Artificial intelligence
            </h3>
            <p style={{marginTop: '0.5rem'}}>
                Nanyang Scholarship Recipient, First Class Honors
            </p>

        </div>
    </div>
  )
}

export default EducationCard