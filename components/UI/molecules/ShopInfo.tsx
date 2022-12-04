import styled from 'styled-components';

import BoxTitleText from '../atoms/text/BoxTitleText';
import TimeText from '../atoms/text/TimeText';
import TelText from '../atoms/text/TelText';

import type { ShopItemType } from '../../../data/shopItems';

const ShopInfo = ({ shopItem }: { shopItem: ShopItemType }) => {
  return (
    <ShopInfoWrapper>
      <BoxTitleText>{shopItem.shop_name}</BoxTitleText>
      <TimeText>{shopItem.shop_operating_hours}</TimeText>
      <TelText>{shopItem.shop_tel}</TelText>
    </ShopInfoWrapper>
  );
};

const ShopInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 15px 15px;

  strong {
    margin-bottom: 10px;
  }

  time {
    margin-bottom: 5px;
  }
`;

export default ShopInfo;
