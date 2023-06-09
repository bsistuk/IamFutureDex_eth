import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M10.0025 0C9.5025 0 9.0025 0.19 8.5925 0.59L5.2925 3.88L10.0025 8.58L14.7125 3.88L11.4125 0.59C11.0025 0.19 10.5025 0 10.0025 0ZM3.8825 5.29L0.5925 8.59C-0.1975 9.37 -0.1975 10.63 0.5925 11.41L3.8825 14.71L8.5825 10L3.8825 5.29ZM16.1225 5.29L11.4225 10L16.1225 14.71L19.4125 11.41C20.2025 10.63 20.2025 9.37 19.4125 8.59L16.1225 5.29ZM10.0025 11.42L5.2925 16.12L8.5925 19.41C9.3725 20.2 10.6325 20.2 11.4125 19.41L14.7125 16.12L10.0025 11.42Z" />
    </Svg>
  );
};

export default Icon;
