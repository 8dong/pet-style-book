import styled from 'styled-components';

interface GridLayoutProps {
  columnWith: string;
  children: React.ReactNode;
}

const GridLayout = ({ columnWith, children }: GridLayoutProps) => {
  return <GridLayoutWrapper columnWith={columnWith}>{children}</GridLayoutWrapper>;
};

const GridLayoutWrapper = styled.ul<{ columnWith: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${(props) => props.columnWith});
  justify-content: space-between;
  column-gap: 30px;
  row-gap: 30px;

  @media screen and (max-width: 1024px) {
    justify-content: space-evenly;
  }
`;

export default GridLayout;
