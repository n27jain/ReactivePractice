import React from 'react';
import './SideDrawer.css';

import {
    Link
} from 'react-router-dom';


const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    let titles;
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    if(!props.IsLoggedIn){
        titles =
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
    }
    else{
        titles =
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

    }

    return(
        {titles}
    );
};
export default sideDrawer;