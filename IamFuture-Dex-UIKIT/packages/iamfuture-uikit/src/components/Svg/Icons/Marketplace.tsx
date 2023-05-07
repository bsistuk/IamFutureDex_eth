import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M19 10V17C19 17.2652 18.8946 17.5196 18.7071 17.7071C18.5196 17.8946 18.2652 18 18 18H2C1.73478 18 1.48043 17.8946 1.29289 17.7071C1.10536 17.5196 1 17.2652 1 17V10H0V8L1 3H19L20 8V10H19ZM3 10V16H17V10H3ZM4 11H12V14H4V11ZM1 0H19V2H1V0Z" />
    </Svg>
  );
};

export default Icon;
