import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// project import
import NavHeader from './NavHeader';
import NavItems from './NavItems';
import MiniNavStyled from './MiniNavStyled';
import { drawerWidth } from '../../../config';

//store
import { useAppSelector } from '@/store/hooks';
import { selectDrawerOpen } from '@/store/slicer/menu';

type NavProps = {
	handleDrawerToggle: () => void;
	open?: boolean;
};
const Nav = ({ handleDrawerToggle, open }: NavProps) => {
	const theme = useTheme();
	const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

	// header content
	const navContent = useMemo(() => <NavItems />, []);
	const navHeader = useMemo(() => <NavHeader open={open} />, [open]);

	return (
		<Box
			component="nav"
			sx={{ flexShrink: { md: 0 }, zIndex: 1300 }}
			aria-label="mailbox folders"
		>
			{!matchDownMD ? (
				<MiniNavStyled variant="permanent" open={open}>
					{navHeader}
					{navContent}
				</MiniNavStyled>
			) : (
				<Drawer
					variant="temporary"
					open={open}
					onClose={handleDrawerToggle}
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: 'block', lg: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
							borderRight: `1px solid ${theme.palette.divider}`,
							backgroundImage: 'none',
							boxShadow: 'inherit'
						}
					}}
				>
					{open && navHeader}
					{open && navContent}
				</Drawer>
			)}
		</Box>
	);
};

Nav.propTypes = {
	open: PropTypes.bool,
	handleDrawerToggle: PropTypes.func,
	window: PropTypes.object
};

export default Nav;
