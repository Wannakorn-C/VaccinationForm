//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Confirm from './pages/Confirm';
import Success from './pages/Success';
import Register from './pages/Register';
//MultiStepForm
import {MultiStepForm} from './components/MultiStepForm';
//styled components
import {StyledContainer} from './components/Styles';
//Loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
    <StyledContainer> 
      <Switch>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <MultiStepForm/>
        </Route>
        <Route path="/confirm">
          <Confirm/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </StyledContainer>
    </Router>
    
  );
}

export default App;
