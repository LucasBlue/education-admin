import { useRoutes } from 'react-router-dom';
import administration from '@/routes/administration';

export default function ThemeRoutes() {
	return useRoutes([...administration]);
}
