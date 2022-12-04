import styled from 'styled-components';

const Empty = ({ children }: { children: string }) => {
  return <EmptyWrapper>{children}</EmptyWrapper>;
};

const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 50px;
`;

export default Empty;
