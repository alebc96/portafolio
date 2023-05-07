import './AboutMe.css'
import pictureUser from '../../assets/programmer.png'
import device from '../../assets/hero-devices.svg'

const AboutMe = () => {
  return (
    <section className='about-container'> 
        <div className="presentacion">
            <h2>Software engineer, Web developer</h2>
            <p>I like to design useful and simple things to solve big problems</p>
        </div>
        <div className="image-container">
            <img src={pictureUser} alt="profile photo user"/>
        </div>
        <section className="image-decoration">
            <img src={device} alt="picture about some devices" />
        </section>
    </section>
  )
}
export default AboutMe