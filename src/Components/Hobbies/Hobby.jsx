import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hobby = ({ url, text, icon, type }) => {
  return (
    <div className="hobby">
      <div
        className="icon-bg"
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        <FontAwesomeIcon className="lang-icon" icon={icon} />
      </div>

      <h1 className="icon-caption">{text}</h1>
    </div>
  );
};
export default Hobby;
