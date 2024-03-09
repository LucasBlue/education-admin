//hooks
import useMenu from '@/hooks/useCountDown/useMenu';

// material-ui
import {
	Avatar,
	Box,
	ButtonBase,
	Stack,
	Typography,
	useMediaQuery,
	IconButton
} from '@mui/material';
import ProfileMenu from '@/components/ProfleMenu';

//

const Profile = () => {
	const { open, handleClose, anchorEl, handleToggle } = useMenu();
	const iconBackColorOpen = 'grey.300';
	return (
		<>
			<Box sx={{ flexShrink: 0, ml: 0.75, position: 'absolute', left: '88%' }}>
				<ButtonBase
					sx={{
						p: 0.25,
						bgcolor: open ? iconBackColorOpen : 'transparent',
						borderRadius: 1,
						'&:hover': { bgcolor: 'secondary.lighter' }
					}}
					aria-label="open profile"
					aria-controls={open ? 'profile-grow' : undefined}
					aria-haspopup="true"
					onClick={handleToggle}
				>
					<Stack
						direction="row"
						spacing={2}
						alignItems="center"
						sx={{ p: 0.5 }}
					>
						<Avatar alt="profile user" sx={{ width: 32, height: 32 }}>
							M
						</Avatar>
						<Typography variant="subtitle1">马 浩</Typography>
					</Stack>
				</ButtonBase>
			</Box>
			<ProfileMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
		</>
	);
};

export default Profile;
