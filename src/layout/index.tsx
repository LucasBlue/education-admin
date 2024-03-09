//component
import SimpleBar from '@/components/Third-Party/SimpleBar';
import Nav from '@/layout/Nav';
import Header from '@/layout/Header';
//store
import { RootState } from '@/store';
import { openDrawer } from '@/store/slicer/menu';
import { selectMenu, selectDrawerOpen } from '@/store/slicer/menu';

//hooks
import { useState, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

//mui/material
import { useMediaQuery, useTheme, Box } from '@mui/material';

function Layout() {
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const drawerOpen = useAppSelector(selectDrawerOpen);
	const [open, setOpen] = useState<boolean>(drawerOpen);
	const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
	const handleDrawerToggle = useCallback(() => {
		setOpen(!open);
		dispatch(openDrawer({ drawerOpen: !open }));
	}, [open]);

	useEffect(() => {
		setOpen(!matchDownLG);
		dispatch(openDrawer({ drawerOpen: !matchDownLG }));
	}, [matchDownLG]);
	useEffect(() => {
		if (open !== drawerOpen) setOpen(drawerOpen);
	}, [drawerOpen]);
	console.log('layoutRender');
	return (
		<Box sx={{ display: 'flex', width: '100%' }}>
			<Header open={open} handleDrawerToggle={handleDrawerToggle} />
			<SimpleBar
				sx={{
					'& .simplebar-content': {
						display: 'flex',
						flexDirection: 'column'
					}
				}}
			>
				<Nav open={open} handleDrawerToggle={handleDrawerToggle} />
			</SimpleBar>
			<Box
				component="main"
				sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}
			></Box>
		</Box>
	);
}

export default Layout;
