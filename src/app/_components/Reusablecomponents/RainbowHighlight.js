import { RoughNotation } from "react-rough-notation";

const RainbowHighlight = ({ color, children }) => {

    const animationDuration = Math.floor(10 * children.length);

    return (
        <RoughNotation
            type="highlight"
            multiline={true}
            iterations={1}
            animationDuration={animationDuration}
            color={color}
        >
            {children}
        </RoughNotation>
    );
};

export default RainbowHighlight;