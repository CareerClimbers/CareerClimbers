import React from 'react';
import ReactDOM from 'react-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './assets/css/styles.scss'
import 'antd/dist/antd.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
  

//import * as serviceWorker from './serviceWorker';
//serviceWorker.unregister();
