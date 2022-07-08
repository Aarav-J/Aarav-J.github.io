import FancyButton from "./FancyButton";
import MediaButton from "./MediaButton";

import {
  faGithub,
  faInstagram,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const SocialMediaBar = () => {
  return (
    <>
      <FancyButton />
      <MediaButton link="https://github.com/Aarav-J" icon={faGithub} />
      <MediaButton
        link="https://www.instagram.com/_aarav.jain1/"
        icon={faInstagram}
      />
      <MediaButton
        link="https://open.spotify.com/user/paei6pn8u6ac9w2d42wkaohup?si=cf6b16a7e29142a3"
        icon={faSpotify}
      />
    </>
  );
};
export default SocialMediaBar;
