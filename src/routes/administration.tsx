import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

import Loadable from '@/components/Loadable';

const SchoolBasicInformation = Loadable(
	lazy(() => import('@/components/SchoolManagement/schoolBasicInformation'))
);

const Layout = Loadable(lazy(() => import('@/layout/index')));

const Login = lazy(() => import('@/pages/Login'));

const administration = [
	{
		path: '/',
		element: <Navigate to="/login" replace />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/dashboard',
		element: <Layout />,
		children: [
			{
				path: 'schoolBasicInformation',
				element: <SchoolBasicInformation />
			}
		]
	}
];

export default administration;
