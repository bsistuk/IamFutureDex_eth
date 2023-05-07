import styled from "styled-components";
import Button from "./Button";
import { BaseButtonProps, PolymorphicComponent } from "./types";

const IconRadialButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  padding: 0;
  border-radius: 50% !important;
  width: ${({ scale }) => (scale === "sm" ? "32px" : "24px")};
  height: ${({ scale }) => (scale === "sm" ? "32px" : "24px")};
`;

export default IconRadialButton;
