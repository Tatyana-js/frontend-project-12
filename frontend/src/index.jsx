import ReactDOM from 'react-dom/client';
import init from './init.jsx';
import './index.css';

const app = async () => {
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(await init());
};

app();
