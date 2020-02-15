import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import AppStore from './redux/store/appStore';
import Home from "./pages/home";

function App() {
  return (
    <Provider store={AppStore}>
      <Home />
    </Provider>
  );
}

export default App;
