import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type ElementType = {
  id: number;
  title: string;
  content: string;
};

export const Api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (builder) => ({
    getElements: builder.query<ElementType[], void>({
      query: () => 'elements',
    }),
  }),
});

export const { useGetElementsQuery } = Api;
