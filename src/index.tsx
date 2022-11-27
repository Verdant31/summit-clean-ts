import ReactDOM from 'react-dom/client';
import App from './App';
import { RepositoriosContextProvider } from './contexts/RepositoriosContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RepositoriosContextProvider>
    <App />
  </RepositoriosContextProvider>
);
reportWebVitals();