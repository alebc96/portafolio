import "./Proyects.css";
import tictac from "../../assets/tic-tac-toe.png";
import comprasApp from "../../assets/ComprasApp.png";
import comprasAppFront from "../../assets/ComprasApp-front.png";
import storeEcommerce from "../../assets/ecommerce01.png";
import ecommerceBandW from "../../assets/ecommerce.png"
import moviesApp from "../../assets/movies.png"
import ntBackend from "../../assets/tn-backend.png"
import ntReact from "../../assets/tn-react.png"
import { ProjectCard } from "./ProjectCard";
import Project from "../../types/Project";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

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
    name: "eCommerce",
    link: "https://bandwstore.netlify.app",
    image: ecommerceBandW,
    github: "https://github.com/alebc96/eCommerceBW.git",
    tools: ["AngularJs", "HTML", "CSS", "node js", "json-server", "bootstrap"]
  },
  {
    name: "Social Network",
    link: "https://the-network-react.netlify.app/",
    image: ntReact,
    github: "https://github.com/alebc96/the-network-react.git",
    tools: ["React Js", "HTML", "CSS"]
  },
  {
    name: "Social Network backend",
    link: "https://github.com/alebc96/the-network.git",
    image: ntBackend,
    github: "https://github.com/alebc96/the-network.git",
    tools: ["NodeJs", "MongoDB", "Firebase"]
  },
  {
    name: "eCommerce MUI",
    link: "https://material-store.netlify.app",
    image: storeEcommerce,
    github: "https://github.com/alebc96/eCommerce.git",
    tools: ["AngularJs", "API", "TypeScript", "HTML", "MUI"]
  },
  {
    name: "Fakeflix",
    link: "https://fakeflix-tmdb.netlify.app",
    image: moviesApps,
    github: "https://github.com/alebc96/movies-tmdb.git",
    tools: ["AngularJs", "API", "TypeScript", "HTML", "Bootstrap", "CSS"]
  }
];

export const Proyects = () => {

  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])


  return (
    <>
      <div className="head-title-container">
        <h2 className="head-title-projects">Things I've done</h2>
      </div>
      <div className="alert-container" data-aos="zoom-in">
        <p>I use Render for the backend and Netlify for the frontend, so the initial load time may take a while (especially in Render). I hope you are patient :D</p>
      </div>
      <div className="projects-container">
        {proyects.map((project: Project) => (
          <ProjectCard project={project} key={project.name}></ProjectCard>
        ))}
      </div>
    </>
  );
};
