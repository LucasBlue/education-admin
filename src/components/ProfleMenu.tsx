//material-ui
import {
	Grid,
	Stack,
	Typography,
	Avatar,
	MenuItem,
	IconButton,
	ListItemIcon,
	ListItemText,
	Divider,
	Fade
} from '@mui/material';

//icon
import { LogoutOutlined, UserSwitchOutlined } from '@ant-design/icons';

//component
import { StyledMenu } from '@/layout/Header/Profile/CustomizedMenusStyled';

type ProfileMenuType = {
	open: boolean;
	handleClose: () => void;
	anchorEl: HTMLButtonElement;
};

const ProfileMenu = ({ open, handleClose, anchorEl }: ProfileMenuType) => {
	return (
		<StyledMenu
			id="demo-customized-menu"
			MenuListProps={{
				'aria-labelledby': 'demo-customized-button'
			}}
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			TransitionComponent={Fade}
		>
			<MenuItem sx={{ marginTop: 1 }} onClick={handleClose} disableRipple>
				<Grid
					spacing={6}
					container
					justifyContent="space-between"
					alignItems="center"
				>
					<Grid item>
						<Stack direction="row" spacing={1.25} alignItems="center">
							<Avatar alt="profile user" sx={{ width: 32, height: 32 }}>
								M
							</Avatar>
							<Stack>
								<Typography variant="h6">马浩</Typography>
								<Typography variant="body2" color="textSecondary">
									移动管理员
								</Typography>
							</Stack>
						</Stack>
					</Grid>
					<Grid item>
						<IconButton size="large" color="secondary" onClick={handleClose}>
							<LogoutOutlined />
						</IconButton>
					</Grid>
				</Grid>
			</MenuItem>
			<Divider sx={{ my: 0.5 }} />
			<MenuItem onClick={handleClose} disableRipple>
				<ListItemIcon>
					<UserSwitchOutlined />
				</ListItemIcon>
				<ListItemText>切换角色</ListItemText>
			</MenuItem>
		</StyledMenu>
	);
};

export default ProfileMenu;
