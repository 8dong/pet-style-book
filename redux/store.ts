import { configureStore } from '@reduxjs/toolkit';

import likShopItemsSlice from './likeShopItemsSlice';

const store = configureStore({
  reducer: {
    likeShopItems: likShopItemsSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
