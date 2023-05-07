import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M17.7701 1.33005C16.4401 0.710046 15.0001 0.260046 13.5001 4.59982e-05C13.487 -0.000374605 13.4739 0.00209348 13.4618 0.00727676C13.4497 0.01246 13.4389 0.0202326 13.4301 0.0300462C13.2501 0.360046 13.0401 0.790046 12.9001 1.12005C11.3091 0.880046 9.69112 0.880046 8.10012 1.12005C7.96012 0.780046 7.75012 0.360046 7.56012 0.0300462C7.55012 0.0100462 7.52012 4.59982e-05 7.49012 4.59982e-05C5.99012 0.260046 4.56012 0.710046 3.22012 1.33005C3.21012 1.33005 3.20012 1.34005 3.19012 1.35005C0.470117 5.42005 -0.279883 9.38005 0.0901172 13.3C0.0901172 13.32 0.100117 13.34 0.120117 13.35C1.92012 14.67 3.65012 15.47 5.36012 16C5.39012 16.01 5.42012 16 5.43012 15.98C5.83012 15.43 6.19012 14.85 6.50012 14.24C6.52012 14.2 6.50012 14.16 6.46012 14.15C5.89012 13.93 5.35012 13.67 4.82012 13.37C4.78012 13.35 4.78012 13.29 4.81012 13.26C4.92012 13.18 5.03012 13.09 5.14012 13.01C5.16012 12.99 5.19012 12.99 5.21012 13C8.65012 14.57 12.3601 14.57 15.7601 13C15.7801 12.99 15.8101 12.99 15.8301 13.01C15.9401 13.1 16.0501 13.18 16.1601 13.27C16.2001 13.3 16.2001 13.36 16.1501 13.38C15.6301 13.69 15.0801 13.94 14.5101 14.16C14.4701 14.17 14.4601 14.22 14.4701 14.25C14.7901 14.86 15.1501 15.44 15.5401 15.99C15.5701 16 15.6001 16.01 15.6301 16C17.3501 15.47 19.0801 14.67 20.8801 13.35C20.9001 13.34 20.9101 13.32 20.9101 13.3C21.3501 8.77005 20.1801 4.84005 17.8101 1.35005C17.8001 1.34005 17.7901 1.33005 17.7701 1.33005ZM7.02012 10.91C5.99012 10.91 5.13012 9.96005 5.13012 8.79005C5.13012 7.62005 5.97012 6.67005 7.02012 6.67005C8.08012 6.67005 8.92012 7.63005 8.91012 8.79005C8.91012 9.96005 8.07012 10.91 7.02012 10.91ZM13.9901 10.91C12.9601 10.91 12.1001 9.96005 12.1001 8.79005C12.1001 7.62005 12.9401 6.67005 13.9901 6.67005C15.0501 6.67005 15.8901 7.63005 15.8801 8.79005C15.8801 9.96005 15.0501 10.91 13.9901 10.91Z" />
    </Svg>
  );
};

export default Icon;