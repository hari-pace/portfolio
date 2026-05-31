import { Container } from "react-bootstrap";
import { useInView } from "../hooks/useInView";
import ProjectCards from "./ProjectCards";
import TeamUp      from "../assets/img/TeamUp-screenshot4.png";
import SamsQuizzes from "../assets/img/Sams-quizzes-screenshot2.png";
import Pokefight   from "../assets/img/Pokefight-screenshot2.png";

const PROJECTS = [
  {
    title: "TeamUp",
    description:
      "An event creation app where users can find and create sports events in their local area. Created as part of a group for the final project of the Full-Stack Web & App Development course at WBS Coding School.",
    tech: ["HTML", "CSS", "React.js", "AntDesign", "Node.js", "Express.js", "MongoDB"],
    imgURL: TeamUp,
    link: "https://teamup-de.netlify.app/",
  },
  {
    title: "Sam's Quizzes",
    description:
      "A harder-than-usual quiz game created for my brother, who is for some reason too good at quizzes made for normal people. Leaderboard included so scores can be tracked.",
    tech: ["HTML", "CSS", "React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
    imgURL: SamsQuizzes,
    link: "https://sams-quizzes.netlify.app/",
  },
  {
    title: "Pokefight",
    description:
      "A turn-based Pokémon battle game created as part of the WBS Coding School curriculum. Leaderboard included so scores can be tracked.",
    tech: ["HTML", "CSS", "React.js", "React Bootstrap", "Node.js", "Express.js", "MongoDB"],
    imgURL: Pokefight,
    link: "https://wondrous-baklava-2f2d28.netlify.app/",
  },
];

const Projects = () => {
  const [ref, inView] = useInView();

  return (
    <section className="projects-section" id="projects" aria-label="Projects">
      <Container>
        <div
          ref={ref}
          className={`reveal${inView ? " is-visible" : ""}`}
        >
          <h2 className="section-heading gradient-text">Projects</h2>
          <p className="section-subtext">
            A selection of projects created either alone or during my time at
            WBS Coding School.
          </p>
        </div>

        <div
          className={`projects-grid reveal-stagger${inView ? " is-visible" : ""}`}
        >
          {PROJECTS.map((project) => (
            <ProjectCards key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
