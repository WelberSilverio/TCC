import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MenuLogin from './Login';

ReactDOM.render(<MenuLogin/>, document.getElementById('root'));
registerServiceWorker();
