import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice';

export default configureStore({
  reducer: {
    channels: channelsReducer,
  }
});