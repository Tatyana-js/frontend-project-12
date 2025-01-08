import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { chatApi } from '../api/chatApi.js';
import activeChannelReducer from './activeChannelSlice.js';

const rootReducer = combineReducers({
  [chatApi.reducerPath]: chatApi.reducer,
  activeChannel: activeChannelReducer,
  // messages: mesagesReducer,
});

const store = configureStore ({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(chatApi.middleware),
  });

export default store;