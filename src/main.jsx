import ReactDOM from 'react-dom/client';
import { App } from './App';
import Modal from 'react-modal';

Modal.setAppElement('#root')
document.getElementById('root')
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
