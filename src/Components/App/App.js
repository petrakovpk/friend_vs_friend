import React from 'react';
import Main from "../Main";
import './App.css';
import Navigation from "../Navigation";
import store from '../../Store/store.js';
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store} >

        <Navigation/>

        <Main/>

    </Provider>
  );
}

export default App;
