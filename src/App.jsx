import "./styles/App.scss";
import Typewriter from "./Components/Typewriter";
import SocialMediaBar from "./Components/SocialMediaBar/SocialMediaBar";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills/Skills";

const firstContent = `I am Aarav Jain `;

const App = () => {
  return (
    <div className="content">
      <Navbar />
      <div className="title">
        <Typewriter content={firstContent} speed={300} />
      </div>
      <div className="everything-else">
        <div className="main-content">
          <div className="subtitle">
            <p>An amazing species</p>
          </div>
          <div className="about-me">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              ipsam animi expedita veniam corrupti aperiam fuga maiores ut hic
              omnis optio soluta quisquam? Enim alias adipisci illo nulla. Hic,
              quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Numquam aut et nisi accusantium ex dignissimos quam repellat quas!
              Corrupti deleniti ea impedit quasi deserunt earum totam omnis
              soluta veritatis nulla?
            </p>
          </div>
          <div className="socialMediaBar">
            <SocialMediaBar />
          </div>
        </div>
        <div className="skills">
          <Skills />
        </div>
      </div>
    </div>
  );
};
export default App;
