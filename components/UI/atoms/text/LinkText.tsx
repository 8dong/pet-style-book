import styled from 'styled-components';
import Link from 'next/link';

export interface LinkTextProps {
  linkName: string;
  linkHref: string;
}

const LinkText = ({ linkName, linkHref }: LinkTextProps) => {
  return (
    <LinkTextWrapper>
      <Link href={linkHref}>{linkName}</Link>
    </LinkTextWrapper>
  );
};

const LinkTextWrapper = styled.span`
  transition: color 200ms ease-in-out;

  &:hover {
    color: #1890ff;
  }
`;

export default LinkText;
