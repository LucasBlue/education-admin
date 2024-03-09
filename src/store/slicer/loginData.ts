import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from './createSlice';

export type InitialLoginDataType = {
	loginType: 'smsCode' | 'phoneNumber';
};

const initialLoginData: InitialLoginDataType = {
	loginType: 'smsCode'
};

export const loginDataSlice = createSlice({
	name: 'LoginData',
	initialState: initialLoginData,
	reducers: (create) => ({
		switchLoginTypes: create.reducer(
			(state, action: PayloadAction<InitialLoginDataType>) => {
				state.loginType = action.payload.loginType;
			}
		)
	}),
	selectors: {
		selectLoginType: (loginData) => loginData.loginType
	}
});

export const { switchLoginTypes } = loginDataSlice.actions;

export const { selectLoginType } = loginDataSlice.selectors;
