//material-ui
import { Button, Stack, TextField } from '@mui/material';
//form
import { useFormik } from 'formik';
import * as Yup from 'yup';
//router
import { useNavigate } from 'react-router-dom';

function PhoneLogin() {
	const navigate = useNavigate();
	console.log('phoneLoginRender');
	const formik = useFormik({
		initialValues: {
			phoneNumber: '',
			password: ''
		},
		validationSchema: Yup.object({
			phoneNumber: Yup.string()
				.matches(
					/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
					'请输入正确的手机号'
				)
				.required('手机号不能为空'),
			password: Yup.string().max(16, '密码超过16位').required('请输入密码')
		}),
		onSubmit: (values) => {
			// alert(JSON.stringify(values, null, 2));
			navigate('/dashboard');
		}
	});

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
				/>
				<TextField
					name="password"
					type="password"
					label="密码"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={!!(formik.touched.password && formik.errors.password)}
					onBlur={formik.handleBlur}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<Button type="submit" variant="contained" disableElevation>
					登录
				</Button>
			</Stack>
		</form>
	);
}

export default PhoneLogin;
