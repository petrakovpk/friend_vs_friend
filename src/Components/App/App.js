import React from 'react';
import Home from "../Home";
import './App.css';
import Navigation from "../Navigation";
import store from '../../Store/store.js';
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store} >

        <Navigation/>

        <Home/>

    </Provider>
  );
}

export default App;
