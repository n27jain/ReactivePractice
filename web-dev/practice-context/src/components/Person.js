import React, { Component } from 'react';
// first we will make a new context
import { MyContext } from '../MyContext';



class Person extends Component {
 
    
  render() {
     
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

export default Person;