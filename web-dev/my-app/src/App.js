import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
import BackDrop from './components/backdrop/BackDrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Toolbar from './components/ToolBar/Toolbar';
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import LocationsScreen from './screens/LocationsScreen';
import LoginScreen from './screens/LoginScreen';
import QAScreen from './screens/QAScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import SignoutScreen from './screens/SignoutScreen';

import {FleetContext, Provider} from './FleetContext'



class App extends Component {

  
  state = {
    sideDrawerOpen : false,
    signedIn : false,
  };

 
  drawerToggleHandler = () => {
    this.setState( (prev) => {
      return {sideDrawerOpen:!prev.sideDrawerOpen};
    } );
  };

  signedInToggleHandler = () => {
    this.setState( (prev) => {
      return {signedIn: !prev.signedIn};
    });
  };

  

render(){
 
  let backdrop;
  let redirectVar = <Redirect exact from="/" to="/Login" />;
  if(this.state.sideDrawerOpen){
    backdrop = <BackDrop onClick = {this.drawerToggleHandler}/>
  }
  function RedirectStatus(toChat){
    if(toChat){
      redirectVar = <Redirect to = '/Chat'/>;
    }
    else{
      redirectVar = <Redirect exact from="/" to="/Login" />;
    }
  }


    return (

      // <FleetContext.Provider value ={{...this.drawerToggleHandler}}>
        
      // </FleetContext.Provider>

      <Router>
      <div style = {{ height: '100%'}}>
        <Toolbar DrawerHandler = {this.drawerToggleHandler} StateSigned = {this.state.signedIn} SignedInToggleHandler = {this.signedInToggleHandler} />
        <SideDrawer show = {this.state.sideDrawerOpen} DrawerHandler = {this.drawerToggleHandler} StateSigned = {this.state.signedIn} SignedInToggleHandler = {this.signedInToggleHandler} />
        {backdrop}
      
          <div className = "page-container">
            <main style = { {marginTop: '64px'} }>
              <Route path = '/Login' 
                render = { (props) => (<LoginScreen SignedInToggleHandler = {this.signedInToggleHandler}/>)}/>
              <Route path = '/Home' component ={HomeScreen} /> 
              <Route path = '/Locations' component ={LocationsScreen} /> 
              <Route path = '/QA' component ={QAScreen} /> 
              <Route path = '/SignOut' component ={SignoutScreen} /> 
              <Route path = '/Schedule' component ={ScheduleScreen} /> 
              <Route path = '/Chat' component ={ChatScreen} /> 
              {redirectVar}
            </main>
          </div>
      </div>
      </Router>
    );
  }
}
export default App;
