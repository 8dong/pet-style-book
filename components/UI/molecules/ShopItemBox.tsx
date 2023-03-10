import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import Card from '../atoms/layout/Card';
import ImageElement from '../atoms/image/ImageElement';
import ShopInfo from './ShopInfo';
import FloatButton from '../atoms/button/FloatButton';

import likShopItemsSlice from '../../../redux/likeShopItemsSlice';

import type { ShopItemType } from '../../../data/shopItems';
import type { RootState } from '../../../redux/store';

const ShopItemBox = ({ shopItem }: { shopItem: ShopItemType }) => {
  const likeShopItems = useSelector((store: RootState) => store.likeShopItems);

  const dispatch = useDispatch();
  const handleClickLikeButton = () => {
    dispatch(likShopItemsSlice.actions.toggleLikeHandle(shopItem));
  };

  const isLiked = likeShopItems.find((likedShop) => likedShop.id === shopItem.id)
    ? 'like'
    : 'unlike';

  const router = useRouter();
  const handleClickShopItem = () => {
    router.push(shopItem.id);
  };

  return (
    <ShopItemBoxWrapper onClick={handleClickShopItem}>
      <Card>
        <div className='shopImage'>
          <ImageElement imgSrc={shopItem.shop_img} imgAlt={shopItem.shop_name} />
        </div>
        <ShopInfo shopItem={shopItem} />
        <FloatButton
          topPosition='80%'
          leftPosition='80%'
          buttonType={isLiked}
          onClick={handleClickLikeButton}
        >
          <i className='fi fi-sr-heart'></i>
        </FloatButton>
      </Card>
    </ShopItemBoxWrapper>
  );
};

const ShopItemBoxWrapper = styled.article`
  display: flex;
  flex-direction: column;

  position: relative;

  .shopImage {
    width: 300px;
    height: 200px;
    border-radius: 10px;

    margin-bottom: 20px;

    overflow: hidden;
  }

  .shopImage img {
    transition: transform 200ms ease-in-out;
  }

  &:hover {
    .shopImage img {
      transform: scale(1.1);
    }
  }
`;

export default ShopItemBox;
