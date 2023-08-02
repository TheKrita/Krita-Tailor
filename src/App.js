import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home/Home';
// import OrdersDetailed from './Components/OrdersDetailed/OrdersDetailed';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Requests from './Components/Requests/Requests';
import RequestDetails from './Components/RequestDetails/RequestDetails';

const App = () => (
  <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/requests" component={Requests} />
        {/* <Route exact path="/orderdetails" component={OrdersDetailed} /> */}
        <Route exact path="/requestDetails" component={RequestDetails} />
      </Switch>
    <Footer />
  </BrowserRouter>
)
export default App;
