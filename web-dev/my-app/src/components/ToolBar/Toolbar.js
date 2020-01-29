import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import {
    Link
} from 'react-router-dom';

import logo from '../../img/medicine.png'



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
                <Link to = "/SignOut" onClick = {props.DrawerHandler}> SignOut </Link>
            </li>
            <li>
                <Link to = "/Schedule" onClick = {props.DrawerHandler}> Schedule </Link>
            </li>
            <li>
                <Link to = "/Chat" onClick = {props.DrawerHandler}> Chat </Link>
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
                <img src = {logo}/>
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
