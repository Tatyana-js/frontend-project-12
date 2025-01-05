import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { channelsApi } from '../api/channelsApi.js';
import activeChannelReducer from './activeChannelSlice.js';

const rootReducer = combineReducers({
  [channelsApi.reducerPath]: channelsApi.reducer,
  activeChannel: activeChannelReducer,
  // messages: mesagesReducer,
});

const store = configureStore ({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(channelsApi.middleware),
  });

export default store;