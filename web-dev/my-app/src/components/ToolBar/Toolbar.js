import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import {
    Link
} from 'react-router-dom';

import logo from '../../img/medicine.png'
import { Button } from 'react-bootstrap';



const toolbar = props => {

    let items;

    if(!props.StateSigned){
        items = (
            <React.Fragment>
            <li>
            <Link to = "/Login" > Login </Link>
            </li>
            <li>
            <Link to = "/Locations" > Locations </Link>
            </li>
            <li>
            <Link to = "/QA" > {'Q&A'} </Link>
            </li>
                </React.Fragment>
            );
    }
    else{
        items = (
            <React.Fragment>
            <li>
            <Link to = "/Login" > Log Out </Link>
            </li>
            <li>
                <Link to = "/Schedule" > Schedule </Link>
            </li>
            <li>
                <Link to = "/Chat" > Chat </Link>
            </li>
                </React.Fragment>
            );
    }

    return(
        <header className = "toolbar">
        <nav className= "toolbar_navigation">
            <div className = "toolbar_toggle-button">
                <DrawerToggleButton DrawerHandler = {props.DrawerHandler}/>
            </div>
            <div className = "toolbar_logo"> 
            <Link to = "/">
                <img src = {logo}/>
            </Link>
                
            </div>
            <div className = "spacer"/>
            <div className ="toolbar_navigation_items">
                <ul >
                   {items}
                </ul>
            </div>
        </nav>
    </header>
    )
};
export default toolbar;
