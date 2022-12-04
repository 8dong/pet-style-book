import React from 'react';
import styled from 'styled-components';

const Card = ({ children }: { children: React.ReactNode }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

const CardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export default Card;
