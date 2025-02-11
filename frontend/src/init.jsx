import { StrictMode } from 'react';
import i18next from 'i18next';
import { Provider } from 'react-redux';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as filter from 'leo-profanity';
import { io } from 'socket.io-client';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { chatApi } from './api/chatApi.js';
import activeChannelReducer from './slices/activeChannelSlice.js';
import modalsReducer from './slices/modalsSlice.js';
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
      },
    });

  const rootReducer = combineReducers({
    [chatApi.reducerPath]: chatApi.reducer,
    activeChannel: activeChannelReducer,
    modals: modalsReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatApi.middleware),
  });

  const socket = io();

  socket.on('newChannel', (payload) => {
    store.dispatch(chatApi.util.updateQueryData('getChannels', undefined, (draft) => {
      draft.push(payload);
    }));
  });

  socket.on('removeChannel', (payload) => {
    store.dispatch(chatApi.util.updateQueryData('getChannels', undefined, (draft) => {
      draft.filter((channel) => channel.id !== payload);
    }));
  });

  socket.on('renameChannel', (payload) => {
    store.dispatch(chatApi.util.updateQueryData('getChannels', undefined, (draft) => {
      const channel = draft.find((c) => c.id === payload.id);
      channel.name = payload.name;
    }));
  });

  socket.on('newMessage', (payload) => {
    store.dispatch(chatApi.util.updateQueryData('getMessages', undefined, (draft) => {
      draft.push(payload);
    }));
  });

  const rollbarConfig = {
    accessToken: '45c668d145bf4e379844b7f78319daf0',
    environment: 'production',
  };

  filter.add(filter.getDictionary('en'));
  filter.add(filter.getDictionary('ru'));

  return (
    <RollbarProvider config={rollbarConfig}>
      <I18nextProvider i18n={i18n}>
        <ErrorBoundary>
          <Provider store={store}>
            <StrictMode>
              <App />
              <ToastContainer />
            </StrictMode>
          </Provider>
        </ErrorBoundary>
      </I18nextProvider>
    </RollbarProvider>
  );
};

export default init;
