import React, {Component}  from 'react';
import './App.css';

import Toolbar from './components/ToolBar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/backdrop/BackDrop';

import HomeScreen from './screens/HomeScreen'
import LocationsScreen from './screens/LocationsScreen'
import QAScreen from './screens/QAScreen'
import LoginScreen from './screens/LoginScreen'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  state = {
    sideDrawerOpen : false,
  };

  drawerToggleHandler = () => {
    this.setState( (prev) => {
      return {sideDrawerOpen:!prev.sideDrawerOpen};
    } );
  };
  

  



render(){
  let backdrop;
  if(this.state.sideDrawerOpen){
    backdrop = <BackDrop onClick = {this.drawerToggleHandler}/>
  }

    return (

      <Router>
      <div style = {{ height: '100%'}}>
        <Toolbar DrawerHandler = {this.drawerToggleHandler}/>
        <SideDrawer show = {this.state.sideDrawerOpen} DrawerHandler = {this.drawerToggleHandler}/>
        {backdrop}
      
       
          <div className = "page-container">

            <main style = { {marginTop: '64px'} }>

              <Route path = '/Login' component = {LoginScreen}/>
              <Route path = '/Home' component ={HomeScreen}/> 
              <Route path = '/Locations' component ={LocationsScreen}/> 
              <Route path = '/QA' component ={QAScreen}/> 

            </main>
          </div>
      </div>
      </Router>
    );
  }
}
export default App;
