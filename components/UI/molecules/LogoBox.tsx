import styled from 'styled-components';

import LogoTitle from '../atoms/text/LogoTitleText';
import LogoSubTitle from '../atoms/text/LogoSubTitleText';

const LogoBox = ({ logoTitle, logoSubTitle }: { logoTitle: string; logoSubTitle: string }) => {
  return (
    <LogoBoxWrapper>
      <LogoTitle logoTitle={logoTitle} />
      <LogoSubTitle logoSubTitle={logoSubTitle} />
    </LogoBoxWrapper>
  );
};

const LogoBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
`;

export default LogoBox;
