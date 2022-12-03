import React from 'react';
import styled from 'styled-components';

import MainHeaderSection from '../UI/organisms/MainHeaderSection';

const navLinks = [
  { linkName: '매장 리스트', linkHref: '/' },
  { linkName: '스타일 북', linkHref: '/style_book' },
  { linkName: '나의 메뉴', linkHref: '/my_info' }
];

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayoutContainer>
      <MainHeaderSection
        logoTitle='Pet Style Book'
        logoSubTitle='애견 미용 스타일북'
        navLinks={navLinks}
      />
      {children}
    </PageLayoutContainer>
  );
};

const PageLayoutContainer = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 200px;
`;

export default PageLayout;
