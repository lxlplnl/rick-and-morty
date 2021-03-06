import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppStore from './redux/store/appStore';
import Home from './pages/home';
import NotFound from './pages/notFound';
import theme from './theme';
import CharacterDetail from './pages/characterDetail';
import Header from './components/header';
import AppSnackbar from './components/snackbar';

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
        <AppSnackbar />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
