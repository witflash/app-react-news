import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

const API_URL = 'http://localhost:3000/articles';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

axios.get(API_URL).then(response => console.log('response', response));
