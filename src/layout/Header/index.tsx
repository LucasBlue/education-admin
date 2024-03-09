//material-ui
import {
	Toolbar,
	IconButton,
	useMediaQuery,
	AppBar,
	useTheme
} from '@mui/material';

//icons
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

//component
import HeaderContent from '@/layout/Header/HeaderContent';

//hooks
import { useAppSelector } from '@/store/hooks';
import { selectDrawerOpen } from '@/store/slicer/menu';
//styled
import AppBarStyled from '@/layout/Header/AppBarStyled';

function Header({ handleDrawerToggle, open }) {
	const theme = useTheme();
	const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

	const iconBackColor = 'grey.100';
	const iconBackColorOpen = 'grey.200';

	// common header
	const mainHeader = (
		<Toolbar>
			<IconButton
				disableRipple
				aria-label="open drawer"
				onClick={handleDrawerToggle}
				edge="start"
				color="secondary"
				sx={{
					color: 'text.primary',
					bgcolor: open ? iconBackColorOpen : iconBackColor,
					ml: { xs: 0, lg: -2 }
				}}
			>
				{!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</IconButton>
			<HeaderContent />
		</Toolbar>
	);

	const appBar = {
		position: 'fixed',
		color: 'inherit',
		elevation: 0,
		sx: {
			borderBottom: `1px solid ${theme.palette.divider}`
			// boxShadow: theme.customShadows.z1
		}
	};

	return (
		<>
			{!matchDownMD ? (
				<AppBarStyled
					open={open}
					color="inherit"
					position="fixed"
					elevation={0}
					sx={{
						borderBottom: `1px solid ${theme.palette.divider}`,
						boxShadow: '0',
						backgroundColor: 'none'
					}}
				>
					{mainHeader}
				</AppBarStyled>
			) : (
				<AppBar
					color="inherit"
					position="fixed"
					elevation={0}
					sx={{
						borderBottom: `1px solid ${theme.palette.divider}`,
						boxShadow: '0',
						backgroundColor: 'none'
					}}
				>
					{mainHeader}
				</AppBar>
			)}
		</>
	);
}

export default Header;
