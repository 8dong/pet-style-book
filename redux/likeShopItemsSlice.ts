import { createSlice } from '@reduxjs/toolkit';

import type { ShopItemType } from '../data/shopItems';

const likShopItemsSlice = createSlice({
  name: 'likeShopItems',
  initialState: [] as ShopItemType[],
  reducers: {
    toggleLikeHandle(state, action) {
      const isLike = state.find((likedShop) => likedShop.id === action.payload.id);

      if (isLike) {
        const newLikeshopItems = state.filter((likedShop) => likedShop.id !== action.payload.id);

        return newLikeshopItems;
      } else {
        state.push(action.payload);
      }
    }
  }
});

export default likShopItemsSlice;
