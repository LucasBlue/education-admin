//redux
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from './createSlice';
//icons
import Icon, { HomeOutlined, MessageOutlined } from '@ant-design/icons';

//lodash
import _ from 'lodash';

//types

type IconType = typeof Icon;

//action

const icons = {
	HomeOutlined,
	MessageOutlined
};

export type MenuItemType = {
	id: string;
	title: string;
	type: string;
	url?: string;
	icon?: IconType;
	breadcrumbs?: boolean;
	target?: boolean;
	external?: boolean;
	fold?: boolean;
	level: number;
	children?: { [key: string]: MenuItemType };
};

type ActiveItemActionType = {
	openItem?: string[];
	level?: number;
	drawerOpen?: boolean;
};

type MenuInitialStateType = {
	openItem?: ActiveItemActionType['openItem'];
	defaultId?: string;
	openComponent?: 'buttons';
	drawerOpen?: boolean;
	componentDrawerOpen?: boolean;
	menus?: { [key: string]: MenuItemType };
};

// initial state
const initialState: MenuInitialStateType = {
	openItem: ['dashboard'],
	defaultId: 'dashboard',
	openComponent: 'buttons',
	drawerOpen: false,
	componentDrawerOpen: true,
	menus: {
		schoolManagement: {
			id: 'schoolManagement',
			title: '学校管理',
			type: 'item',
			icon: icons.HomeOutlined,
			fold: false,
			level: 1,
			children: {
				schoolBasicInformation: {
					id: 'schoolBasicInformation',
					title: '学校基础信息',
					type: 'item',
					level: 2,
					fold: false,
					url: '/schoolBasicInformation'
				}
			}
		},
		testMessage: {
			id: 'testMessage',
			title: '短信',
			type: 'item',
			icon: icons.MessageOutlined,
			fold: false,
			level: 1,
			children: {
				messageQuery: {
					id: 'messageQuery',
					title: '短信查询',
					type: 'item',
					level: 2,
					url: '/messageQuery'
				}
			}
		}
	}
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: (create) => ({
		switchNav: create.reducer(
			(state, action: PayloadAction<ActiveItemActionType>) => {
				const activeId = action.payload.openItem[0];
				const level = action.payload.level;
				if (action.payload.level !== 1) {
					if (state.openItem.length >= level) {
						if (_.indexOf(state.openItem, activeId) >= 0) {
							state.openItem.splice(level - 1);
						} else {
							state.openItem.splice(level - 1);
							state.openItem.push(activeId);
						}
					} else {
						state.openItem.push(activeId);
					}
				} else {
					if (state.openItem[0] === activeId && state.openItem.length !== 0) {
						state.openItem = [];
						return;
					}
					state.openItem = action.payload.openItem;
				}
			}
		),
		openDrawer: create.reducer(
			(state, action: PayloadAction<ActiveItemActionType>) => {
				state.drawerOpen = action.payload.drawerOpen;
			}
		)
		// incrementAsync: create.asyncThunk(
		// 	async (amount: number) => {
		// 		const response = await fetchCount(amount);
		// 		// The value we return becomes the `fulfilled` action payload
		// 		return response.data;
		// 	},
		// 	{
		// 		pending: (state) => {
		// 			state.status = 'loading';
		// 		},
		// 		fulfilled: (state, action) => {
		// 			state.status = 'idle';
		// 			state.value += action.payload;
		// 		},
		// 		rejected: (state) => {
		// 			state.status = 'failed';
		// 		}
		// 	}
		// )
	}),
	selectors: {
		selectDrawerOpen: (menu) => menu.drawerOpen,
		selectMenu: (menu) => menu.menus,
		selectOpenItem: (menu) => menu.openItem
	}
});

export const { selectDrawerOpen, selectMenu, selectOpenItem } =
	menuSlice.selectors;

export const { openDrawer, switchNav } = menuSlice.actions;
