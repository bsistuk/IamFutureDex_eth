import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M6 7V10H12V15H6V18L0 12.5L6 7ZM20 5.5L14 0V3H8V8H14V11L20 5.5Z" />
    </Svg>
  );
};

export default Icon;
