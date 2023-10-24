import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import JoinUs from './Components/JoinUs/JoinUs';
import CreditDiv from './Components/CeditDiv/CreditDiv';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
      
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <Router>
        <ScrollToTop />
        <Header/>
        <Switch>
          <Route path={["/" , "/home" , "/Home"]} exact component={Home}/>
          <Route path={["/Join-us" , "/join-us" , "/Join-CUAC"]} exact component={JoinUs}/>
          
        </Switch>
        <Footer></Footer>
        <CreditDiv/>
      </Router>
      
    </div>
  );
}

export default App;
