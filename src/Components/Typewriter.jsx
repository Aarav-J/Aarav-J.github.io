import { useEffect, useState } from "react";

import typewriter from "../extras/typewriter.mp3";
const Typewriter = ({ content, speed }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [soundStatus, setSoundStatus] = useState(false);
  const [index, setIndex] = useState(0);
  const sound = new Audio(typewriter);
  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }

        return index + 1;
      });
    }, speed);
  }, []);

  useEffect(() => {
    if (soundStatus) {
      sound.play();
    }

    setDisplayedContent(content.slice(0, index));
  }, [index]);

  return (
    <>
      <pre onClick={() => setSoundStatus(true)} className="type-writer">
        {displayedContent}
      </pre>
    </>
  );
};
export default Typewriter;
