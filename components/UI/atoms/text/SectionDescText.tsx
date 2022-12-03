import styled from 'styled-components';

const SectionDescText = ({ children }: { children: string }) => {
  return <SectionDescTextWrapper>{children}</SectionDescTextWrapper>;
};

const SectionDescTextWrapper = styled.strong`
  font-size: 18px;
  font-weight: 400;
  word-break: keep-all;
`;

export default SectionDescText;
