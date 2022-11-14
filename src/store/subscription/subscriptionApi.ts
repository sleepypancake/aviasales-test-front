import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';


export const subscriptionApi = createApi({
    reducerPath: 'subscriptionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://aviasales-app-subscribe.herokuapp.com/api/v1/'
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