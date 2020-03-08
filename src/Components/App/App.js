import React from 'react';
import Friends from "../Friends";
import './App.css';
import Navigation from "../Navigation";
import store from '../../Store/store.js';
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store} >

        <Navigation/>

        <Friends/>

    </Provider>
  );
}

export default App;
