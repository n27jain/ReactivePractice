import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import {
    Link
} from 'react-router-dom';

const toolbar = props => (
    <header className = "toolbar">
        <nav className= "toolbar_navigation">
            <div className = "toolbar_toggle-button">
                <DrawerToggleButton DrawerHandler = {props.DrawerHandler}/>
            </div>
            <div className = "toolbar_logo"> <a href="/"> THE LOGO</a></div>
            <div className = "spacer"/>
            <div className ="toolbar_navigation_items">
                <ul >
                    <li>
                        <Link to = "/Login" > Login </Link>
                    </li>
                    <li>
                        <Link to = "/Locations" > Locations </Link>
                    </li>
                    <li>
                        <Link to = "/QA" > {'Q&A'} </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);
export default toolbar;
