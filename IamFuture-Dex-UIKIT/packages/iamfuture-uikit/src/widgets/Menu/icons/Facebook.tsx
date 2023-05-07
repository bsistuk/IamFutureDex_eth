import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M7.5 11.5H10L11 7.5H7.5V5.5C7.5 4.47 7.5 3.5 9.5 3.5H11V0.14C10.674 0.0970001 9.443 0 8.143 0C5.428 0 3.5 1.657 3.5 4.7V7.5H0.5V11.5H3.5V20H7.5V11.5Z" />
    </Svg>
  );
};

export default Icon;
