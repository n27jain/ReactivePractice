import React, {useContext} from 'react';

import {myContext} from './MyContext'

const ChildsChild = props => {
    const MyContext = useContext(myContext);
    let textShow;

    if(myContext.state.sideDrawerOpen){
        textShow = <text>Hey Sexy</text>
    }


    return(
        <div className = "style-button" >
            <text>Schedule Screen</text>
            {textShow}
        </div>
    );
};


export default ChildsChild;