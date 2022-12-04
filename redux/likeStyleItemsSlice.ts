import { createSlice } from '@reduxjs/toolkit';

import type { StyleItemType } from '../data/styleItems';

const likeStyleItemsSlice = createSlice({
  name: 'likeStyleItems',
  initialState: [] as StyleItemType[],
  reducers: {
    toggleLikeHandle(state, action) {
      const isLike = state.find((likedStyle) => likedStyle.id === action.payload.id);

      if (isLike) {
        const newLikeStyleItems = state.filter((likedStyle) => likedStyle.id !== action.payload.id);

        return newLikeStyleItems;
      } else {
        state.push(action.payload);
      }
    }
  }
});

export default likeStyleItemsSlice;
