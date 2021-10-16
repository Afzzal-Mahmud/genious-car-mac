import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import LogInForm from './Components/LogInForm/LogInForm'
import Macanic from './Pages/Macanic/Macanic';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
          <Route exact path='/' component = {Home}></Route>
          <Route path='/home' component = {Home}></Route>
          <PrivateRoute path='/macanic'>
            <Macanic></Macanic>
          </PrivateRoute>
          <Route path='/login' component = {LogInForm}></Route>
          </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
