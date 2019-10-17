import React from 'react';
import './App.css';
import  CommentBox from './components/CommentBox'
import  CommentList from './components/CommentList'
import {Provider} from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CommentBox />
      <CommentList />
      </div>
    </Provider>
  );
}

export default App;
