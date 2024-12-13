import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {

  }
});

export const { actions } = channelsSlice;
export default channelsSlice.reducer;