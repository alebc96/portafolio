import "./ProjectCard.css";
//import cardBackground from '../../assets/image.png'
import github from "../../assets/github.svg";
import ProjectProps from '../../types/ProjectProps';

export const ProjectCard = ({project}: ProjectProps) => {
  return (
    <div className="card-project-container" style={{backgroundImage: `url(${project.image})`}}>
      <div className="text-container">
        <div className="title">
          <h4>{project.name}</h4>
        </div>
        <div className="links-container">
          <a href={project.github} target="_blank">
            <img className="github-pic" src={github} alt="github icon" />
          </a>
          <a className="page-link" href={project.link} target="_blank">See page</a>
        </div>
        <div className="tech-tools">
          {project.tools.map(el=>(
            <p key={el}>{el}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
