import { createSlice } from '@reduxjs/toolkit';

export const defaultChannel = {
  id: '1',
  name: 'general',
  removable: false,
};

const initialState = {
  currentChannel: defaultChannel,
};

const activeChannelSlice = createSlice({
  name: 'activeChannel',
  initialState,
  reducers: {
    selectActiveTab: (state, { payload }) => {
      state.currentChannel = payload;
    },
  },
});

export const activeChannelSelector = (state) => state.activeChannel.currentChannel;
export const { selectActiveTab } = activeChannelSlice.actions;
export default activeChannelSlice.reducer;
