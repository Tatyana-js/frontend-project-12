import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  tagTypes: ['Channels', 'Messages'],
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api/v1',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getChannels: builder.query({ // Каналы
      query: () => '/channel',
      providesTags: ['Channels'],
    }),
    addChannel: builder.mutation ({
      query: (channel) => ({
        url: '/channels',
        method: 'POST',
        body: channel,
      }),
      invalidatesTags: ['Channels'],
    }),
    renameChannel: builder.mutation ({
      query: ({ id, name }) => ({
        url: `/channels/${id}`,
        method: 'PATCH',
        body: { name },
      }),
      invalidatesTags: ['Channels', 'Messages'],
    }),
    removeChannel: builder.mutation ({
      query: (id) => ({
        url: `/channels/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Channels', 'Messages'],
    }),
    getMessages: builder.query({ // Сообщения
      query: () => '/messages',
      providesTags: ['Messages'],
    }),
    addMessage: builder.mutation ({
      query: (newMessege) => ({
        url: 'messages',
        method: 'POST',
        body: newMessege,
      }),
      invalidatesTags: ['Messages'],
    }),
  }),
});

export const {
  useGetChannelsQuery,
  useGetMessagesQuery,
  useAddChannelMutation,
  useAddMessageMutation,
  useRenameChannelMutation,
  useRemoveChannelMutation, 
} = chatApi;