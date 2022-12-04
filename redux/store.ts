import { configureStore } from '@reduxjs/toolkit';

import likShopItemsSlice from './likeShopItemsSlice';
import likeStyleItemsSlice from './likeStyleItemsSlice';

const store = configureStore({
  reducer: {
    likeShopItems: likShopItemsSlice.reducer,
    likeStyleItems: likeStyleItemsSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
