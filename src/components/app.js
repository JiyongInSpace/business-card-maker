import GlobalStyles from "./global_styled";
import Login from "./login";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Maker from "./maker";
import theme from "./Theme";
import { ThemeProvider } from "styled-components";

function App({authService}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker authService={authService} />
          </Route>
        </Router>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
