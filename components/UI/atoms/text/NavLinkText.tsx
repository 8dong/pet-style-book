import Link from 'next/link';

import { useRouter } from 'next/router';
import styled from 'styled-components';

export interface NavLinkTextProps {
  linkName: string;
  linkHref: string;
}

const NavLinkText = ({ linkName, linkHref }: NavLinkTextProps) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const isCurrent = currentPath === linkHref;

  return (
    <NavLinkTextWrapper isCurrent={isCurrent}>
      <Link href={linkHref}>{linkName}</Link>
    </NavLinkTextWrapper>
  );
};

const NavLinkTextWrapper = styled.span<{ isCurrent: boolean }>`
  display: block;
  border-bottom: ${(props) => (props.isCurrent ? '2px solid  #1890ff' : 'none')};

  color: ${(props) => (props.isCurrent ? '#1890ff' : 'inherit')};

  transition: color 200ms ease-in-out;

  &:hover {
    color: #1890ff;
  }
`;

export default NavLinkText;
