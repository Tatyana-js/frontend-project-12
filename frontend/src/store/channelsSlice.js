import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
  activeChannel: 1,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {

  }
});

export const { actions } = channelsSlice;
export default channelsSlice.reducer;