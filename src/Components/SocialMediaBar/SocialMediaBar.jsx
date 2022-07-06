import FancyButton from "./FancyButton";
import MediaButton from "./MediaButton";

import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
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
      <MediaButton link="mailto: aaravjain2007@gmail.com" icon={faEnvelope} />
    </>
  );
};
export default SocialMediaBar;
