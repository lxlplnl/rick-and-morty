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
import CharacterDetail from "./pages/characterDetail";
import Header from "./components/header";

function App() {
  return (
    <Provider store={AppStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/character/:id" component={CharacterDetail} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
