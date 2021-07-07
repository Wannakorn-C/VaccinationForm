//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
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
      <MultiStepForm/>
    </StyledContainer>
    </Router>
    
  );
}

export default App;
