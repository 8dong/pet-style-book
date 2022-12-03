import styled from 'styled-components';

const BoxTitleText = ({ children }: { children: string }) => {
  return <BoxTitleTextWrapper>{children}</BoxTitleTextWrapper>;
};

const BoxTitleTextWrapper = styled.strong`
  font-size: 18px;
  font-weight: 600;
`;

export default BoxTitleText;
