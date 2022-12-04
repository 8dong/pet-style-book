import { forwardRef } from 'react';
import styled from 'styled-components';

import Card from '../atoms/layout/card';
import SkeletonElement from '../atoms/skeleton/SkeletonElement';

const StyleItemSkeletonBox = forwardRef<HTMLLIElement>((_, ref) => {
  return (
    <StyleItemSkeletonBoxWrapper ref={ref}>
      <Card>
        <div className='styleImage'>
          <SkeletonElement />
        </div>
        <div className='styleInfo'>
          <SkeletonElement />
          <SkeletonElement />
        </div>
      </Card>
    </StyleItemSkeletonBoxWrapper>
  );
});

const StyleItemSkeletonBoxWrapper = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .styleImage {
    width: 300px;
    height: 200px;
    border-radius: 10px;

    margin-bottom: 20px;

    overflow: hidden;
  }

  .styleInfo {
    display: flex;
    flex-direction: column;
    padding: 0 15px 15px;
  }

  .styleInfo div:first-child {
    width: 150px;
    height: 1.5em;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .styleInfo div:nth-child(2) {
    width: 100px;
    height: 1.3em;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;

StyleItemSkeletonBox.displayName = 'StyleItemSkeletonBox';

export default StyleItemSkeletonBox;
