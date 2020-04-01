import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './componenets/pages/Home';
import About from './componenets/pages/About';
import Contact from './componenets/pages/Contact';
import Navbar from './componenets/layout/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './componenets/pages/NotFound';
import AddUser from './componenets/Users/AddUser';
import EditUser from './componenets/Users/EditUser';
import User from './componenets/Users/User';
function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/users/add" component={AddUser}/>
       <Route exact path="/users/edit/:id" component={EditUser}/>
       <Route exact path="/users/:id" component={User}/>
       <Route component={NotFound}/>
     </Switch>
     
       </Router>
    </div>
  );
}

export default App;
