import { Stack, TextField, IconButton, Button, Fade } from '@mui/material';
import { useState, useCallback, SetStateAction, ChangeEvent } from 'react';
import { Send } from '@mui/icons-material';
import useCountDown from '@/hooks/useCountDown';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SmsCodeLogin() {
	console.log('SmsCodeLoginRender');
	const [countDown, handleCountDown, sendBtnState] = useCountDown();
	const formik = useFormik({
		initialValues: {
			phoneNumber: '',
			smsCode: ''
		},
		validationSchema: Yup.object({
			phoneNumber: Yup.string()
				.matches(
					/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
					'请输入正确的手机号'
				)
				.required('手机号不能为空'),
			smsCode: Yup.string()
				.length(6, '请输入正确的验证码')
				.required('请输入验证码')
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	});

	const onSendClick = useCallback(() => {
		handleCountDown();
	}, [handleCountDown]);

	return (
		<form onSubmit={formik.handleSubmit}>
			<Stack sx={{ width: 500 }} spacing={3}>
				<TextField
					label="手机号"
					name="phoneNumber"
					type="phoneNumber"
					value={formik.values.phoneNumber}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
					helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
					InputProps={{
						endAdornment:
							sendBtnState === true ? (
								<Button disabled>
									<Fade in={sendBtnState}>
										<div className="visible opacity-100">{countDown}</div>
									</Fade>
								</Button>
							) : (
								<IconButton onClick={onSendClick}>
									<Fade in={!sendBtnState}>
										<Send sx={{ color: 'primary.main' }} />
									</Fade>
								</IconButton>
							)
					}}
				/>
				<TextField
					name="smsCode"
					type="smsCode"
					label="验证码"
					value={formik.values.smsCode}
					onChange={formik.handleChange}
					error={!!(formik.touched.smsCode && formik.errors.smsCode)}
					onBlur={formik.handleBlur}
					helperText={formik.touched.smsCode && formik.errors.smsCode}
				/>
				<Button type="submit" variant="contained" disableElevation>
					登录
				</Button>
			</Stack>
		</form>
	);
}

export default SmsCodeLogin;
