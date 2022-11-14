import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const subscribeInitial = {
	success: {
        email: false,
        social: false
    },
    available: {
        email: true,
        social: false
    }
};

const subscriptionSlice = createSlice({
	name: 'subscription',
	initialState: {
		successEmail: subscribeInitial.success.email,
		successSocial: subscribeInitial.success.social,
		availableEmail: subscribeInitial.available.email,
		availableSocial: subscribeInitial.available.social,
    },
	reducers: {
		setEmailSuccess: (state) => {
            state.successEmail = true;
            state.availableEmail = false;
            state.availableSocial = true
		},
		setSocialSuccess: (state) => {
            state.successSocial = true;
            state.availableSocial = false
        },
        resetAllSuccess: (state) => {
            state.successEmail = false;
            state.availableEmail = true;
            state.availableSocial = false;
            state.successSocial = false;
        }
	},
});

export const { setEmailSuccess, setSocialSuccess, resetAllSuccess } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;

export const selectCurrentSuccessEmail = (state: RootState) => state.subscription.successEmail;
export const selectCurrentSuccessSocial = (state: RootState) => state.subscription.successSocial;
export const selectCurrentAvailableEmail = (state: RootState) => state.subscription.availableEmail;
export const selectCurrentAvailableSocial = (state: RootState) => state.subscription.availableSocial;
