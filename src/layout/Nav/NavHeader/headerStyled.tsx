// material-ui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ==============================|| DRAWER HEADER - STYLED ||============================== //

export interface StyleProps {
	open?: boolean;
}

// @ts-ignore
const HeaderStyled = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'open'
})<StyleProps>(({ theme, open }) => ({
	...theme.mixins.toolbar,
	display: 'flex',
	alignItems: 'center',
	justifyContent: open ? 'flex-start' : 'center',
	paddingLeft: theme.spacing(open ? 3 : 0)
}));

export default HeaderStyled;
