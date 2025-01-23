import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { chatApi } from './api/chatApi.js';
import activeChannelReducer from './slices/activeChannelSlice.js';
import modalsReducer from './slices/modalsSlice.js';
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
    modals: modalsReducer,
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
      }));
    });

  // socket.on('renameMessage', (payload) => {
  // })

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>

  );
};

export default init;