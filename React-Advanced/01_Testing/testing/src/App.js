import React from 'react';
import  CommentBox from 'components/CommentBox'
import  CommentList from 'components/CommentList'
//import {Provider} from 'react-redux'
//import store from 'store/index'

function App() {
  return (
    <div className="App">
    {/* <Provider store={store}> */}
      
        <CommentBox />
        <CommentList />
      
      {/* </Provider> */}
    </div>
  );
}

export default App;
