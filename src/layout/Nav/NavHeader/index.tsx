import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';

// project import
import HeaderStyled from './headerStyled';

//store
import { useAppSelector } from '@/store/hooks';
import { selectDrawerOpen } from '@/store/slicer/menu';

// ==============================|| DRAWER HEADER ||============================== //

const NavHeader = () => {
	const theme = useTheme();
	const drawerOpen = useAppSelector(selectDrawerOpen);

	return (
		// only available in paid version
		<HeaderStyled theme={theme} open={drawerOpen}>
			<Stack direction="row" spacing={1} alignItems="center"></Stack>
		</HeaderStyled>
	);
};

NavHeader.propTypes = {
	open: PropTypes.bool
};

export default NavHeader;
