import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const channelsApi = createApi({
  reducerPath: 'channels',
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
    getChannels: builder.query({
      query: () => 'channels',
    }),
  }),
});

export const {
  useGetChannelsQuery,
} = channelsApi;