import ReactDOM from 'react-dom/client';
import { App } from './App';
import Modal from 'react-modal';
import { AuthProvider } from './context/AuthContext';

Modal.setAppElement('#root')
document.getElementById('root')
ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
    <App />
</AuthProvider>

);
