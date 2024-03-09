//material-ui
import { Box, IconButton } from '@mui/material';

//icon
import { MoreOutlined } from '@ant-design/icons';
//hooks & type
import useMenu from '@/hooks/useCountDown/useMenu';
import ProfileMenu from '@/components/ProfleMenu';

const MobileSection = () => {
	const { open, handleClose, handleToggle, anchorEl } = useMenu();
	return (
		<>
			<Box sx={{ flexShrink: 0, ml: 0.75, position: 'absolute', left: '88%' }}>
				<IconButton
					component="span"
					disableRipple
					sx={{
						bgcolor: open ? 'grey.300' : 'grey.100'
					}}
					aria-controls={open ? 'menu-list-grow' : undefined}
					aria-haspopup="true"
					onClick={handleToggle}
					color="inherit"
				>
					<MoreOutlined />
				</IconButton>
			</Box>
			<ProfileMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
		</>
	);
};

export default MobileSection;
