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
    createUser: builder.mutation ({
      query: (user) => ({
        url: '/signup',
        metod: 'POST',
        body: user,
      }),
    }),
    getChannels: builder.query({ // Каналы
      query: () => '/channels',
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
    removeMessage: builder.mutation ({
      query: (id) => ({
        url: `/messages/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Messages'],
    }),
    renameMessage: builder.mutation ({
      query: ({ id, body }) => ({
        url: `/channels/${id}`,
        method: 'PATCH',
        body: { name },
      }),
      invalidatesTags: ['Channels', 'Messages'],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetChannelsQuery,
  useGetMessagesQuery,
  useAddChannelMutation,
  useAddMessageMutation,
  useRenameChannelMutation,
  useRemoveChannelMutation, 
  useRemoveMessageMutation,
} = chatApi;