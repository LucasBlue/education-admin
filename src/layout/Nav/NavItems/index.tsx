//material-ui
import { List } from '@mui/material';
//store
import { useAppSelector } from '@/store/hooks';
import NavItem from './NavItem';
import { selectMenu, selectDrawerOpen } from '@/store/slicer/menu';
//lodash
import _ from 'lodash';
//types
import { MenuItemType } from '@/store/slicer/menu';

//hooks
import { useMemo } from 'react';

function NavItems() {
	const drawerOpen = useAppSelector(selectDrawerOpen);
	const menus = useAppSelector(selectMenu);
	const NavBar = useMemo(() => {
		if (menus) {
			return _.map(menus, (item: MenuItemType) => (
				<List key={item.id} sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}>
					<NavItem item={item} />
				</List>
			));
		}
	}, [menus]);
	return <>{NavBar}</>;
}

export default NavItems;
