import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Router>
          <Header></Header>
          <Switch>
          <Route exact path='/' component = {Home}></Route>
          <Route path='/home' component = {Home}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
