import './Skills.css'
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import front_img from '../../assets/front.svg'
import backend_img from '../../assets/back.svg'

const Skills = () => {

    useEffect(() => {
        AOS.init({duration: 1500})
    }, [])
    

  return (
    <section className='skills-container top'>
        <div className='skill-card' data-aos="zoom-in">
            <div className="skill-photo">
                <img src={front_img} alt="frontend icon" />
            </div>
            <div className="text-card-container">
                <h3>Frontend skills</h3>
                <h4>Languages I speak</h4>
                <p>
                    HTML, CSS, JavaScript, TypeScript
                </p>
                <h4>Dev Tools</h4>
                <p>Bootstrap</p>
                <p>ReactJs</p> 
                <p>AngularJs</p>
                <p>Github</p>
            </div>
        </div>
        <div className='skill-card' data-aos="zoom-in">
            <div className="skill-photo">
                <img src={backend_img} alt="backend icon" />
            </div>
            <div className="text-card-container">
                <h3>Backend skills</h3>
                <h4>Languages I speak</h4>
                <p>
                    Javascript, Typescript
                </p>
                <h4>Dev Tools</h4>
                <p>NodeJs</p> 
                <p>Express</p>
                <p>MongoDB</p>
                <p>Git</p>
                <p>Docker</p>
            </div>
        </div>
    </section>
  )
}

export default Skills