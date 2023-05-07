import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import LogoSrc from "../../../assets/logo.png";
import Flex from "../../../components/Box/Flex";
// import { LogoIcon as LogoWithText } from "../icons";

const LogoLong = styled.div`
  background-image: url(${LogoSrc});
  background-size: contain;
  width: 43px;
  height: 43px;
`;

interface Props {
  isMobile?: boolean;
  isPushed?: boolean;
  isDark: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  /* padding-top: 20px; */
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 25px;
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 43px;
    margin-right: 10px;
  }
  .right-eye {
    animation-delay: 20ms;
  }
`;

const LogoTop: React.FC<Props> = ({ isMobile, isDark, isPushed, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Logo">
          <LogoLong className="mobile-icon" /> {isMobile ? <></> : <>IamFuture</>}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Logo">
          <>
            <LogoLong className="mobile-icon" />
            {isMobile ? <></> : <>IamFuture</>}
          </>
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(LogoTop, (prev, next) => prev.isPushed === next.isPushed);
