import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@/store';
import { Provider as StoreProvider } from 'react-redux';
import App from '@/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StoreProvider>
	</React.StrictMode>
);
