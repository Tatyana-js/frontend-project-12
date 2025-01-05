import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentChannel: 1,
};

const activeChannelSlice = createSlice({
  name: 'activeChannel',
  initialState,
  reducers: {
    selectActiveTab: (state, { payload }) => {
      state.activeChannel = payload;
    },
  },
});

export const activeChannelSelector = (state) => state.activeChannel.currentChannel;
export const { selectActiveTab } = activeChannelSlice.actions;
export default activeChannelSlice.reducer;