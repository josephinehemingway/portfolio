import React from 'react'
import {Image} from 'antd'
import { Fade } from 'react-awesome-reveal'

interface Props {
    title: string
    imgUrls: string[]
}

const Gallery: React.FC<Props> = ({title, imgUrls}) => {
  return (
    <div className='column'>
        <h3 className="sectionHeading">
            FEATURED / <b className='accent'>{title}</b>

            <div className='gallery'>
                <Fade cascade damping={0.2}>
                    <Image.PreviewGroup>
                    {imgUrls.map((url, index) => (
                        <Image
                            loading='lazy'
                            key={index}
                            src={url}
                            alt=""
                            className='galleryImg'
                        />
                    ))}
                    </Image.PreviewGroup>
                </Fade>
            </div>
        </h3>
    </div>
  )
}

export default Gallery