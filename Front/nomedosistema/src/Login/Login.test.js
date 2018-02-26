import React from 'react';
import ReactDOM from 'react-dom';
import MenuLogin from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuLogin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
