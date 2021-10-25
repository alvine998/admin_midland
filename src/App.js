import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login.pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Banner from './pages/Banner';
import Highlight from './pages/Highlight';
import Cluster from './pages/Cluster';
import Warakas from './pages/Cluster/Warakas';
import Papanggo from './pages/Cluster/Papanggo';
import Cilincing from './pages/Cluster/Cilincing';
import Bahari from './pages/Cluster/Bahari';
import Swasembada from './pages/Cluster/Swasembada';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path={["/", "/login"]} component={Login}/>
          <Route exact path="/banner" component={Banner}/>
          <Route exact path="/highlight" component={Highlight}/>
          <Route exact path="/cluster" component={Cluster}/>
          <Route exact path="/cluster/warakas" component={Warakas}/>
          <Route exact path="/cluster/papanggo" component={Papanggo}/>
          <Route exact path="/cluster/cilincing" component={Cilincing}/>
          <Route exact path="/cluster/bahari" component={Bahari}/>
          <Route exact path="/cluster/swasembada" component={Swasembada}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
