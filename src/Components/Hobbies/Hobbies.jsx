import {
  faChess,
  faGamepad,
  faRunning,
  faSoccerBall,
  faCode,
  faTv,
  faBed,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Hobbies.scss";
import Hobby from "./Hobby";
const Hobbies = () => {
  return (
    <div id="hobbies" className="hobbies-content">
      <h1 className="content-title">Hobbies</h1>

      <div className="hobby-grid">
        <Hobby
          url="https://www.chess.com/member/chessking2580"
          text="Chess"
          icon={faChess}
        />
        <Hobby
          url="https://en.wikipedia.org/wiki/Association_football"
          text="Soccer"
          icon={faSoccerBall}
        />
        <Hobby
          url="https://nj.milesplit.com/athletes/11353134-aarav-jain"
          text="Running"
          icon={faRunning}
        />
        <Hobby
          url="https://en.wikipedia.org/wiki/Video_game"
          text="Video Games"
          icon={faGamepad}
        />
        <Hobby url="https://www.imdb.com/" text="Watching TV" icon={faTv} />
        <Hobby url="https://github.com/Aarav-J/" text="Coding" icon={faCode} />
        <Hobby
          url="https://en.wikipedia.org/wiki/Sleep"
          text="Sleeping"
          icon={faBed}
        />
        <Hobby
          url="https://open.spotify.com/user/paei6pn8u6ac9w2d42wkaohup?si=cf6b16a7e29142a3"
          text="Music"
          icon={faMusic}
        />
      </div>
    </div>
  );
};

export default Hobbies;
//Boostrap, Arduino, Github
