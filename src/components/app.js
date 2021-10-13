import GlobalStyles from "./global_styled";
import Login from "./login";
import { HashRouter as Router, Route } from 'react-router-dom';
import Maker from "./maker";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

function App({FileInput, authService, cardRepository}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository}/>
          </Route>
        </Router>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
