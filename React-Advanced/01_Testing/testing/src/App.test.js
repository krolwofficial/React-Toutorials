import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders "Hi there!" text', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
