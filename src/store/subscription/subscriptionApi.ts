import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';


export const subscriptionApi = createApi({
    reducerPath: 'subscriptionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:5000/api/v1/'
    }),
    endpoints: (builder) => ({
        subscribeByEmail: builder.mutation<{id: number, email: string}, {email: string}>({
            query: (data) => ({
				url: '/users',
				method: 'POST',
				body: data,
			}),
        })
    })
 })

export const { useSubscribeByEmailMutation } = subscriptionApi;