import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import AppStore from './redux/store/appStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/home";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Provider store={AppStore}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
