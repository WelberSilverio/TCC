import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Main from './Main/Main';
import MenuLogin from './Login/Login';
import Cadastro from './Cadastro/Cadastro';

ReactDOM.render(<Cadastro/>, document.getElementById('root'));
registerServiceWorker();
