import styled from 'styled-components';
import { forwardRef } from 'react';

import SkeletonElement from '../atoms/skeleton/SkeletonElement';

const ShopItemSkeletonBox = forwardRef<HTMLLIElement>((_, ref) => {
  return (
    <ShopItemSkeletonWrapper ref={ref}>
      <div className='shopImage'>
        <SkeletonElement />
      </div>
      <div className='shopInfo'>
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
      </div>
    </ShopItemSkeletonWrapper>
  );
});

const ShopItemSkeletonWrapper = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .shopImage {
    width: 300px;
    height: 200px;
    border-radius: 10px;

    margin-bottom: 20px;

    overflow: hidden;
  }

  .shopInfo {
    display: flex;
    flex-direction: column;

    padding: 0 15px 15px;
  }

  .shopInfo div:first-child {
    width: 150px;
    height: 1.5em;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .shopInfo div:nth-child(2) {
    width: 120px;
    height: 1.3em;
    border-radius: 10px;
    margin-bottom: 5px;
  }

  .shopInfo div:nth-child(3) {
    width: 120px;
    height: 1.3em;
    border-radius: 10px;
  }
`;

ShopItemSkeletonBox.displayName = 'ShopItemSkeletonBox';

export default ShopItemSkeletonBox;
