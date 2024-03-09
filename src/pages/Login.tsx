//components
import LoginTabs from '@/components/LoginTabs';
import SmsCodeLogin from '@/components/LoginTabs/smsCodeLogin';
import PhoneLogin from '@/components/LoginTabs/phoneLogin';
//store
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store';
import { selectLoginType } from '@/store/slicer/loginData';
//material-ui
import { Grid, ImageListItem } from '@mui/material';
import Box from '@mui/material/Box';
//assets
import login from '@/assets/images/login-image3.png';

const Login = () => {
	console.log('loginRender');
	const loginType = useAppSelector(selectLoginType);

	return (
		<Box
			component="main"
			sx={{
				display: 'flex',
				flex: '1 1 auto'
			}}
		>
			<Grid container sx={{ flex: '1 1 auto' }}>
				<Grid
					xs={12}
					lg={5}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						position: 'relative'
					}}
				>
					<Box
						component="header"
						sx={{
							left: 0,
							p: 3,
							position: 'fixed',
							top: 0,
							width: '100%'
						}}
					>
						<Box
							sx={{
								display: 'inline-flex',
								height: 32,
								width: 32
							}}
						></Box>
					</Box>
					<LoginTabs>
						{loginType === 'smsCode' ? <SmsCodeLogin /> : <PhoneLogin />}
					</LoginTabs>
				</Grid>
				<Grid
					xs={12}
					lg={7}
					sx={{
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'center',
						'& img': {
							maxWidth: '100%'
						}
					}}
				>
					<ImageListItem sx={{ width: '90%' }}>
						<img
							srcSet={`${login}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${login}?w=248&fit=crop&auto=format`}
							alt="智慧校园"
							loading="lazy"
						/>
					</ImageListItem>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Login;
