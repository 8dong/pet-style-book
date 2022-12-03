import styled from 'styled-components';

import NavLinkText from '../atoms/text/NavLinkText';

import type { NavLinkTextProps } from '../atoms/text/NavLinkText';

const NavBox = ({ navLinks }: { navLinks: NavLinkTextProps[] }) => {
  return (
    <NavBoxWrapper>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLinkText linkName={link.linkName} linkHref={link.linkHref} />
          </li>
        ))}
      </ul>
    </NavBoxWrapper>
  );
};

const NavBoxWrapper = styled.nav`
  ul {
    display: flex;
    justify-content: center;

    border-bottom: 1px solid #f0f0f0;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 50px;
  }
`;

export default NavBox;
