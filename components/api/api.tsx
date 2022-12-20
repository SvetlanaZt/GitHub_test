import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IData, IUser } from '../../components/type';

export interface IArguments {
    name: string,
    page: number,

}

export const gitHubApi = createApi({
  reducerPath: 'gitHubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getByUsersName: builder.query<IData, IArguments>({
      query: ({ name, page }) => `search/users?q=${name}&page=${page}&per_page=5`
    }),
     getByName: builder.query<IUser, string>({
      query: name => `users/${name}`,
    }),
  }),
})

export const { useGetByUsersNameQuery, useGetByNameQuery, useLazyGetByNameQuery } = gitHubApi;