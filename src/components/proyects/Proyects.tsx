import "./Proyects.css";
import tictac from "../../assets/tic-tac-toe.png";
import comprasApp from "../../assets/ComprasApp.png";
import comprasAppFront from "../../assets/ComprasApp-front.png";
import linkedinPic from "../../assets/LinkedinClone.png"
import { ProjectCard } from "./ProjectCard";
import Project from "../../types/Project";

const proyects = [
  {
    name: "Tic Tac Toe",
    link: "https://cerito-ti-tac-toe.netlify.app/",
    image: tictac,
    github: "https://github.com/alebc96/tic-tac-toe.git",
    tools: ["React Js", "HTML", "CSS"]
  },
  {
    name: "ComprasApp backend",
    link: "https://github.com/alebc96/comprasapp.git",
    image: comprasApp,
    github: "https://github.com/alebc96/comprasapp.git",
    tools: ["Node Js", "Express", "Mongo DB"]
  },
  {
    name: "ComprasApp frontend",
    link: "https://comprassapp.netlify.app",
    image: comprasAppFront,
    github: "https://github.com/alebc96/comprasapp-frontend.git",
    tools: ["AngularJs", "HTML", "CSS"]
  },
  {
    name: "Linkedin clone",
    link: "https://linkedin2-clone.netlify.app/",
    image: linkedinPic,
    github: "https://github.com/alebc96/linkedin-clone.git",
    tools: ["React Js", "HTML", "CSS"]
  },
];

export const Proyects = () => {
  return (
    <>
      <div className="head-title-container">
        <h2 className="head-title-projects">Things I've done</h2>
      </div>

      <div className="projects-container">
        {proyects.map((project: Project) => (
          <ProjectCard project={project} key={project.name}></ProjectCard>
        ))}
      </div>
    </>
  );
};
