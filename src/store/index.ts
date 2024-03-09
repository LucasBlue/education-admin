//deps
import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineSlices, configureStore, Tuple } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';

//slice
import { loginDataSlice } from '@/store/slicer/loginData';
import { menuSlice } from '@/store/slicer/menu';

const reducer = combineSlices(loginDataSlice, menuSlice);
export type RootState = ReturnType<typeof reducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
	const store = configureStore({
		reducer,
		middleware: () => new Tuple(logger),
		preloadedState
	});
	setupListeners(store.dispatch);
	return store;
};

export const store = makeStore();
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>;
