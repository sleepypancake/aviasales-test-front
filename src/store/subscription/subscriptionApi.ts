import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';


export const subscriptionApi = createApi({
    reducerPath: 'subscriptionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        subscribeByEmail: builder.mutation<unknown, {email: string}>({
            query: (data) => ({
				url: '/posts',
				method: 'POST',
				body: data,
			}),
			// async onQueryStarted(data, { dispatch, queryFulfilled }) {
			// 	try {
			// 		const { data } = await queryFulfilled;
			// 		// `onSuccess` side-effect
			// 		data && dispatch(authApi.endpoints.getUserInfo.initiate(undefined, { forceRefetch: true }));
			// 	} catch (err) {
			// 		// `onError` side-effect
			// 		throw 'Error fetching first user data!';
			// 	}
			// },
        })
    })
 })

export const { useSubscribeByEmailMutation } = subscriptionApi;