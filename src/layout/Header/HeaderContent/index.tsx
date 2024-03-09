// material-ui
import { Box, IconButton, Link, useMediaQuery, useTheme } from '@mui/material';

// project import
import Profile from '@/layout/Header/Profile';

//component
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
	const theme = useTheme();
	const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			{!matchesXs && <Profile />}
			{matchesXs && <MobileSection />}
		</>
	);
};

export default HeaderContent;
