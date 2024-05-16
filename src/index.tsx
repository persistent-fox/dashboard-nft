import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);

reportWebVitals();
