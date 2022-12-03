import styled from 'styled-components';

const SectionTitleText = ({ children }: { children: string }) => {
  return <SectionTitleTextWrapper>{children}</SectionTitleTextWrapper>;
};

const SectionTitleTextWrapper = styled.h2`
  word-break: keep-all;
  font-size: 30px;
`;

export default SectionTitleText;
