import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import AppStore from './redux/store/appStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <Provider store={AppStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
