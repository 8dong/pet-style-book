import Link from 'next/link';
import styled from 'styled-components';

const LogoTitleText = ({ logoTitle }: { logoTitle: string }) => {
  return (
    <LogoTitleTextWrapper>
      <Link href={'/'}>{logoTitle}</Link>
    </LogoTitleTextWrapper>
  );
};

const LogoTitleTextWrapper = styled.h1`
  a {
    padding: 20px;

    font-size: 25px;
    font-weight: 700;
  }
`;

export default LogoTitleText;
