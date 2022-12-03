import styled from 'styled-components';

import ImageElement from '../atoms/image/ImageElement';
import BoxTitle from '../atoms/text/BoxTitleText';
import TimeText from '../atoms/text/TimeText';
import TelText from '../atoms/text/TelText';

import type { ShopItemType } from '../../../data/shopItems';

const ShopItemBox = ({ shopItem }: { shopItem: ShopItemType }) => {
  return (
    <ShopItemBoxWrapper>
      <div className='shopImage'>
        <ImageElement imgSrc={shopItem.shop_img} imgAlt={shopItem.shop_name} />
      </div>
      <div className='shopInfo'>
        <BoxTitle>{shopItem.shop_name}</BoxTitle>
        <TimeText>{shopItem.shop_operating_hours}</TimeText>
        <TelText>{shopItem.shop_tel}</TelText>
      </div>
    </ShopItemBoxWrapper>
  );
};

const ShopItemBoxWrapper = styled.article`
  display: flex;
  flex-direction: column;

  border-radius: 10px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  position: relative;

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

  .shopInfo strong {
    margin-bottom: 10px;
  }

  .shopInfo time {
    margin-bottom: 5px;
  }
`;

export default ShopItemBox;
