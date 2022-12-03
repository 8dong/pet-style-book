import styled from 'styled-components';

import LogoBox from '../molecules/LogoBox';
import NavBox from '../molecules/NavBox';

import type { NavLinkTextProps } from '../atoms/text/NavLinkText';

interface MainHeaderSectionProps {
  logoTitle: string;
  logoSubTitle: string;
  navLinks: NavLinkTextProps[];
}

const MainHeaderSection = ({ logoTitle, logoSubTitle, navLinks }: MainHeaderSectionProps) => {
  return (
    <MainHeaderSectionWrapper>
      <LogoBox logoTitle={logoTitle} logoSubTitle={logoSubTitle} />
      <NavBox navLinks={navLinks} />
    </MainHeaderSectionWrapper>
  );
};

const MainHeaderSectionWrapper = styled.header`
  width: auto;
  max-width: 1024px;
  margin: 0 auto;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background-color: #fff;
`;

export default MainHeaderSection;
