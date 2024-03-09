//material-ui
import {
	Tabs,
	Tab,
	Stack,
	Tooltip,
	Button,
	ImageListItem
} from '@mui/material';
import Box from '@mui/material/Box';
//hooks
import React, { useState, ReactNode, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
//store
import { switchLoginTypes } from '@/store/slicer/loginData';
import { selectLoginType } from '@/store/slicer/loginData';
//assets
import QRCode from '@/assets/images/downloadApp.png';

type TabValue = 'smsCode' | 'phoneNumber';

interface LoginProps {
	children?: ReactNode;
}
function LoginTabs(props: LoginProps) {
	const loginType = useAppSelector(selectLoginType);
	const [countDown, setCountDown] = useState<number>(60);
	const dispatch = useAppDispatch();
	const handleLoginType = useCallback(
		(event: React.SyntheticEvent, newValue: TabValue) => {
			dispatch(switchLoginTypes({ loginType: newValue }));
		},
		[dispatch]
	);

	return (
		<Box
			sx={{
				backgroundColor: 'background.paper',
				flex: '1 1 auto',
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			<Box
				sx={{
					maxWidth: 550,
					px: 3,
					py: '100px',
					width: '100%'
				}}
			>
				<div>
					<Stack spacing={1} sx={{ mb: 3 }}>
						<div className="text-3.5xl font-bold">登陆</div>
						<Tooltip
							title={
								<ImageListItem>
									<img
										srcSet={`${QRCode}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
										src={`${QRCode}?w=164&h=164&fit=crop&auto=format`}
										alt="APP二维码"
										loading="lazy"
									/>
								</ImageListItem>
							}
							placement="right"
						>
							<Box sx={{ width: 80 }}>
								<Button
									size="small"
									sx={{
										width: 80,
										fontSize: '12px',
										textAlign: 'left',
										padding: 0
									}}
									disabled
								>
									下载手机APP
								</Button>
							</Box>
						</Tooltip>
						<div>
							<Tabs sx={{ mb: 3 }} value={loginType} onChange={handleLoginType}>
								<Tab label="验证码登陆" value="smsCode" />
								<Tab label="手机号登陆" value="phoneNumber" />
							</Tabs>
							{props.children}
						</div>
					</Stack>
				</div>
			</Box>
		</Box>
	);
}

export default LoginTabs;
