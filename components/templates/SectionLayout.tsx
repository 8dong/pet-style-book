import React from 'react';
import styled from 'styled-components';

import SectionTitleText from '../UI/atoms/text/SectionTitleText';

interface SectionLayoutProps {
  children: React.ReactNode;
  sectionTitle: string;
}

const SectionLayout = ({ children, sectionTitle }: SectionLayoutProps) => {
  return (
    <SectionLayoutWrapper>
      <SectionTitleText>{sectionTitle}</SectionTitleText>
      {children}
    </SectionLayoutWrapper>
  );
};

const SectionLayoutWrapper = styled.section`
  padding: 20px;

  h2 {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export default SectionLayout;
