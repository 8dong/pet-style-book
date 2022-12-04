import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import ImageElement from '../atoms/image/ImageElement';
import FloatButton from '../atoms/button/FloatButton';

import likShopItemsSlice from '../../../redux/likeShopItemsSlice';

import type { ShopItemType } from '../../../data/shopItems';
import type { RootState } from '../../../redux/store';
import ShopInfo from './ShopInfo';

const ShopItemBox = ({ shopItem }: { shopItem: ShopItemType }) => {
  const likeShopItems = useSelector((store: RootState) => store.likeShopItems);

  const dispatch = useDispatch();
  const handleClickLikeButton = () => {
    dispatch(likShopItemsSlice.actions.toggleLikeHandle(shopItem));
  };

  const isLiked = likeShopItems.find((likedShop) => likedShop.id === shopItem.id)
    ? 'like'
    : 'unlike';

  return (
    <ShopItemBoxWrapper>
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
`;

export default ShopItemBox;
