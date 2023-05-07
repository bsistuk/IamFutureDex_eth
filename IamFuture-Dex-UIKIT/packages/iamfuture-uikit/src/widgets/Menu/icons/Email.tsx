import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M18.5 0H2.5C1.4 0 0.51 0.9 0.51 2L0.5 14C0.5 15.1 1.4 16 2.5 16H18.5C19.6 16 20.5 15.1 20.5 14V2C20.5 0.9 19.6 0 18.5 0ZM18.5 4L10.5 9L2.5 4V2L10.5 7L18.5 2V4Z" />
    </Svg>
  );
};

export default Icon;
