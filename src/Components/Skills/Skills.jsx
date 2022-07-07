import "../../styles/Skills.scss";
import Skill from "./Skill";
import {
  faHtml5,
  faCss3,
  faJs,
  faYarn,
  faNpm,
  faPython,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
  return (
    <div id="skills" className="skills-content">
      <h1 className="content-title">skillset</h1>
      <div className="skill-grid">
        <Skill
          url="https://developer.mozilla.org/en-US/docs/Web/HTML"
          text="HTML"
          icon={faHtml5}
        />
        <Skill
          url="https://developer.mozilla.org/en-US/docs/Web/CSS"
          text="CSS"
          icon={faCss3}
        />
        <Skill
          url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          text="Javascript"
          icon={faJs}
        />
        <Skill url="https://yarnpkg.com/" text="Yarn" icon={faYarn} />
        <Skill url="https://www.npmjs.com/" text="NPM" icon={faNpm} />
        <Skill url="https://git-scm.com/" text="Git" icon={faGitAlt} />
        <Skill url="https://www.python.org/" text="Python" icon={faPython} />
        <Skill url="https://reactjs.org/" text="React" icon={faReact} />
      </div>
    </div>
  );
};
export default Skills;
