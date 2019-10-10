import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './../src/frontend/home/components/index'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
