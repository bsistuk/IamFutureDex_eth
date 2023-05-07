import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";
import LogoSrc from "../../../assets/logo.png";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
`;

const ContainerFooter = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.12);
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 40px;
`;

const CopyrightEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
const LogoLong = styled.div`
  background-image: url(${LogoSrc});
  background-size: contain;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <>
        <Container>
          <SocialEntry>
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
          </SocialEntry>
          <SocialEntry>
            <CakePrice cakePriceUsd={cakePriceUsd} />
          </SocialEntry>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <SocialEntry>
          <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
          <CakePrice cakePriceUsd={cakePriceUsd} />
        </SocialEntry>
      </Container>
      <ContainerFooter>
        <CopyrightEntry>
          <LogoLong />
          <span>IamFuture 2023. All Rights Reserved.</span>
        </CopyrightEntry>
        <SocialEntry>
          <SocialLinks />
        </SocialEntry>
      </ContainerFooter>
    </>
  );
};

export default PanelFooter;
