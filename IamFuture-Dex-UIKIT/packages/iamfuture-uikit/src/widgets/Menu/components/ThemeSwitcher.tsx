import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";
import Toggle from "../../../components/Toggle/Toggle";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const SwitcherButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 8px;
  border-radius: 8px;
`;

const TextMode = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 8px;
`;

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <Flex alignItems="center">
    <Toggle scale="md" checked={isDark} onChange={() => toggleTheme(!isDark)} />
    <Flex alignItems="center">
      <TextMode> {isDark ? "Dark Mode" : "Light Mode"} </TextMode>
    </Flex>
  </Flex>
);

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
