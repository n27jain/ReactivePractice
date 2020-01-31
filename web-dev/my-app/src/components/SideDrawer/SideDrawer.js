import React from 'react';
import './SideDrawer.css';

import {
    Link
} from 'react-router-dom';


const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    let screen;
    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    if(!props.StateSigned){
        return(
            <nav className = {drawerClasses}>
            <ul>
                <li>
                    <Link to = "/Login" onClick = {props.DrawerHandler}> Login </Link>
                </li>
                <li>
                    <Link to = "/Locations" onClick = {props.DrawerHandler}> Locations </Link>
                </li>
                <li>
                    <Link to = "/QA" onClick = {props.DrawerHandler}> {'Q&A'} </Link>
                </li>
            </ul>
            </nav>
        );
    }
    else{
        return (
            <nav className = {drawerClasses}>
            <ul>
                <li>
                    <Link to = "/Login" onClick = {props.DrawerHandler}> Log Out </Link>
                </li>
                <li>
                    <Link to = "/Schedule" onClick = {props.DrawerHandler}> Schedule </Link>
                </li>
                <li>
                    <Link to = "/Chat" onClick = {props.DrawerHandler}> Chat </Link>
                </li>
            </ul>
            </nav>

        );
    }

};
export default sideDrawer;