import ReactDOM from 'react-dom/client';
import init from './init.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';

const app = async () => {
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(await init());
};

app();
