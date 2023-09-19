import { RoughNotation } from "react-rough-notation";
import { useContext } from "react"; // Import the necessary context hook



const RainbowHighlight = ({ color, children }) => {

  const animationDuration = Math.floor(10 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
      // className={`${
      //   "dark:bg-black light:bg-white"
      // }`}
    >
      {children}
    </RoughNotation>
  );
};

export default RainbowHighlight;