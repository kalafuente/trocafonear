import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home"
import About from "./components/about"
import Values from "./components/values"
import Navigation from './components/menu/index';
import FirstSteps from './components/firsts-steps/index';
import People from './components/people/index';
import { AppContainer } from './AppStyles';

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/handbook" component={Home} />
          <Route path="/handbook/history" component={About} />
          <Route path="/handbook/values" component={Values} />
          <Route path="/handbook/first-steps" component={FirstSteps} />
          <Route path="/handbook/people" component={People} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
