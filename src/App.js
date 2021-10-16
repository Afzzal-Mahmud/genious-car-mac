import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import LogInForm from './Components/LogInForm/LogInForm'
import Macanic from './Pages/Macanic/Macanic';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
          <Route exact path='/' component = {Home}></Route>
          <Route path='/home' component = {Home}></Route>
          <Route path='/home' component = {Macanic}></Route>
          <Route path='/login' component = {LogInForm}></Route>
          </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
