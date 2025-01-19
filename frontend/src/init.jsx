import i18next from 'i18next';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { chatApi } from './api/chatApi.js';
import activeChannelReducer from './slices/activeChannelSlice.js';
import { io } from 'socket.io-client';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import App from './App.jsx';
import resources from './locales/index.js';

const init = async () => {

  const i18n = i18next.createInstance();

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false,
      }
    });

  const rootReducer = combineReducers({
    [chatApi.reducerPath]: chatApi.reducer,
    activeChannel: activeChannelReducer,
  });
    
  const store = configureStore ({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(chatApi.middleware),
  });

  const socket = io();

  socket.on('newMessage', (payload) => {
    store.dispatch(chatApi.util.updateQueryData('getMessages', undefined, (draft) => {
      draft.push({ payload });
      console.log(payload); 
      }));
    });
  
  // messages.push(payload);

  // socket.on('renameMessage', (payload) => {
  // })

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default init;