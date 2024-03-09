import { Suspense, ElementType, ComponentType, ReactNode } from 'react';

// project import
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //
const Loadable =
	<P extends object>(Component: ComponentType<P>) =>
	(props: P): ReactNode => (
		<Suspense fallback={<Loader />}>
			<Component {...props} />
		</Suspense>
	);

export default Loadable;
