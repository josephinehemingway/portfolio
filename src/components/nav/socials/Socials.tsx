import {BsLinkedin, BsGithub, BsFillEnvelopeFill, BsYoutube} from 'react-icons/bs';
import './Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://linkedin.com/in/josephineagathahemingway" className="socials-icon" target="_blank"><BsLinkedin size={25}/></a>
        <a href="https://github.com/josephinehemingway" className="socials-icon" target="_blank"><BsGithub size={25}/></a>
        <a href="mailto:josephine.hemingway@gmail.com" className="socials-icon" target="_blank"><BsFillEnvelopeFill size={25}/></a>
        <a href="https://www.youtube.com/channel/UCG9Qtm7QPliX7OdfDnfyNNQ" className="socials-icon" target="_blank"><BsYoutube size={25}/></a>
    </div>
  )
}

export default Socials;