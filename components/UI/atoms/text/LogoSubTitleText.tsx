import styled from 'styled-components';

const LogoSubTitleText = ({ logoSubTitle }: { logoSubTitle: string }) => {
  return <LogoSubTitleTextWrapper>{logoSubTitle}</LogoSubTitleTextWrapper>;
};

const LogoSubTitleTextWrapper = styled.strong`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
`;

export default LogoSubTitleText;
