import { Container } from "react-bootstrap";
import { useInView } from "../hooks/useInView";
import ReactLogo from "../assets/img/react-black.svg";
import HTML    from "../assets/img/html-black.svg";
import JS      from "../assets/img/js-black.svg";
import TS      from "../assets/img/typescript.svg";
import CSS     from "../assets/img/CSS.svg";
import Tailwind from "../assets/img/tailwind.svg";
import Node    from "../assets/img/node.svg";
import Express from "../assets/img/express.svg";
import Postgres from "../assets/img/postgresql.svg";
import MongoDB  from "../assets/img/mongodb.svg";
import MySQL   from "../assets/img/mysql.svg";
import Firebase from "../assets/img/firebase.svg";
import Dart    from "../assets/img/dart.svg";
import Flutter from "../assets/img/flutter.svg";
import NextJS  from "../assets/img/nextjs.svg";

const FRONTEND = [
  { name: "HTML5",       icon: HTML },
  { name: "CSS3",        icon: CSS },
  { name: "JavaScript",  icon: JS },
  { name: "TypeScript",  icon: TS },
  { name: "React.js",    icon: ReactLogo },
  { name: "Next.js",     icon: NextJS },
  { name: "TailwindCSS", icon: Tailwind },
  { name: "Dart",        icon: Dart },
  { name: "Flutter",     icon: Flutter },
];

const BACKEND = [
  { name: "Node.js",    icon: Node },
  { name: "Express.js", icon: Express },
  { name: "Firebase",   icon: Firebase },
];

const DATABASES = [
  { name: "MySQL",      icon: MySQL },
  { name: "PostgreSQL", icon: Postgres },
  { name: "MongoDB",    icon: MongoDB },
];

const SkillGroup = ({ label, skills }) => (
  <div className="skills-category">
    <p className="skills-category-label">{label}</p>
    <div className="skills-grid">
      {skills.map(({ name, icon }) => (
        <div key={name} className="skill-chip">
          <img src={icon} alt="" aria-hidden="true" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [ref, inView] = useInView();

  return (
    <section className="skills-section" id="skills" aria-label="Skills">
      <Container>
        <div
          ref={ref}
          className={`reveal${inView ? " is-visible" : ""}`}
        >
          <h2 className="section-heading gradient-text">Skills</h2>
          <p className="section-subtext">
            Through a mix of school-based learning during my 17-week course at
            WBS Coding School, along with lots of self-learning, I have built
            the following technical skill set.
          </p>
        </div>

        <div
          className={`reveal-stagger${inView ? " is-visible" : ""}`}
          style={{ transitionDelay: "0.15s" }}
        >
          <SkillGroup label="Frontend"  skills={FRONTEND}  />
          <SkillGroup label="Backend"   skills={BACKEND}   />
          <SkillGroup label="Databases" skills={DATABASES} />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
