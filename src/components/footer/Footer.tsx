import "./Footer.css";
import linkedin from '../../assets/linkedin.png'
import githubFooter from '../../assets/github-footer.png'
import gmail from '../../assets/gmail.png'
const Footer = () => {
  return (
    <div className="footer-container">
      <h2>aleBc</h2>
      <p className="blackbeard">"Peoples dreams don't ever end!"</p>
      <p className="blackbeard">-Blackbeard (One Piece)-</p>
      <section className="contact-social-media">
        <a href="https://linkedin.com/in/manuel-alejandro-becerra-castro" target="_blank"><img src={linkedin} alt="linkedin icon" /></a>
        <a href="https://github.com/alebc96" target="_blank"><img src={githubFooter} alt="github icon" /></a>
        <a href="alebecerrac96@gmail.com" target="_blank"><img src={gmail} alt="mail icon" /></a>
      </section>
    </div>
  );
};

export default Footer;
