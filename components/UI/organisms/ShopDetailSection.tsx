import styled from 'styled-components';

import ImageElement from '../atoms/image/ImageElement';
import ShopInfo from '../molecules/ShopInfo';
import MapBox from '../atoms/image/MapBox';

import type { ShopItemType } from '../../../data/shopItems';

const ShopDetailSection = ({ shopItem }: { shopItem: ShopItemType }) => {
  return (
    <ShopDetailSectionWrapper>
      <div className='shopImage'>
        <ImageElement imgSrc={shopItem.shop_img} imgAlt={shopItem.shop_name} />
      </div>
      <div className='shopInfo'>
        <ShopInfo shopItem={shopItem} />
        <div className='shopMap'>
          <MapBox />
        </div>
      </div>
    </ShopDetailSectionWrapper>
  );
};

const ShopDetailSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .shopImage,
  .shopInfo {
    width: 500px;
    height: 450px;
    padding: 10px;
  }

  .shopInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .shopMap {
    height: 300px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    .shopImage,
    .shopInfo {
      width: 100%;
      max-width: 600px;
    }
  }
`;

export default ShopDetailSection;
