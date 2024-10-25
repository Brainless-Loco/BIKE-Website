import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUsPage/ContactUs';
import CreditDiv from './Components/CreditDiv/CreditDiv';
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
          <Route path={["/Contact-us" , "/join-us" , "/Join-BIKE","/Latest"]} exact component={ContactUs}/>
        </Switch>
        <Footer></Footer>
        <CreditDiv/>
      </Router>
      
    </div>
  );
}

export default App;
