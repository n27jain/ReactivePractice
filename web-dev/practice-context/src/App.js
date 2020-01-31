import React, { Component } from 'react';
import './App.css';
import Child from './Child'

import {myContext} from './MyContext'


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
 
    return (
      <div>
        <text>Hey</text>
        <myContext.Provider
          value= {{
            state: this.state,
            drawerToggleHandler: this.drawerToggleHandler,
          }}
        >
            {this.props.children}
        </myContext.Provider>
        <Child></Child>
      </div>
      
    );
  }
}
export default App;
