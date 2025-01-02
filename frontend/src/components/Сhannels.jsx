import { Nav } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import router from '../utils/routes.js';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return { Authorization: `Bearer ${token}`};
  }
  return {};
};

const Channels = () => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
  const fetchContent = async () => {
    const { data } = await axios.get(router.channelsPath(), { headers: getAuthHeader() });
    console.log(data);
    setChannels(data);
  };

  fetchContent();
}, []);

return (
  <Nav as="ul" id="channels-box" className="flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
    <li className="nav-item w-100">
      <button type="button" className="w-100 rounded-0 text-start btn btn-secondary">
        <span className="me-1"># </span>
          general
      </button>
    </li>
    <li className="nav-item w-100">
      <button type="button" className="w-100 rounded-0 text-start btn">
        <span className="me-1"># </span>
          random
        </button>
    </li>
  </Nav>
  );
};

export default Channels;