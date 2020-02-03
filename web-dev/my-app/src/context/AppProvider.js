import React, { Component } from 'react';
import {AppContext} from './MyContext'

// Then create a provider Component
class AppProvider extends Component {

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
    
    render() {
      return (
        <AppContext.Provider value={{
          state: this.state,
          drawerToggleHandler: this.drawerToggleHandler,
          signedInToggleHandler: this.signedInToggleHandler,
        }}>
          {this.props.children}
        </AppContext.Provider>
      )
    }
  }

  export default AppProvider;