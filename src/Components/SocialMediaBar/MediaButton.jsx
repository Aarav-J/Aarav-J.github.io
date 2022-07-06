// import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/MediaButton.scss";
const MediaButton = ({ link, icon }) => {
  return (
    <form target="_blank" action={link}>
      <button className="med-button" type="submit">
        <FontAwesomeIcon className="icon" icon={icon} />
      </button>
    </form>
  );
};
export default MediaButton;
