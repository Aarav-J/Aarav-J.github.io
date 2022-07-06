import "../../styles/FancyButton.scss";
import pdf from "../../extras/Aarav_Resume.pdf";
const FancyButton = () => {
  return (
    <>
      <form target="_blank" action={pdf}>
        <button type="submit" className="button">
          Resume
          <div className="button__horizontal"></div>
          <div className="button__vertical"></div>
        </button>
      </form>
    </>
  );
};
export default FancyButton;
