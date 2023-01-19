import classes from "./EmployeeNavigation.module.css"
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import BusinessIcon from '@mui/icons-material/Business';
import SavingsIcon from '@mui/icons-material/Savings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItems from "./MenuItems";
import items from "./sidebar.json"
import axios from "axios";
import {  useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Offcanvas from 'react-bootstrap/Offcanvas';




function EmployeeNavigation({openSidebar}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
      
    
    return(
        <div>
            <div>
                <header className={classes.employeeheader}>
                    <div className={classes.logo}>Axis Saral</div>
                    <div className={classes.logoo}><AccountCircleIcon fontSize="large"/>Welcome </div>
                </header>
            </div>
            <div>
                <header className={classes.smallnavbar}>
                    
                    <nav>
                        <ul>
                            <li>
                                <Link to="/employeedashboard"><DashboardIcon/>DASHBOARD</Link>
                            </li>     
                            <li>
                                <Link onClick={handleShow}><MenuIcon/>MENU</Link>
                                
                            </li>  
                            <li>
                                <Link to="/empnotification"><NotificationsIcon/>NOTIFICATION</Link>
                            </li> 
                            <li>
                                <Link to="/">LOGOUT<LogoutIcon/></Link>
                            </li> 
                                         
                        </ul>
                    </nav>
                </header>
            </div>

            <div>
                <Offcanvas show={show} onHide={handleClose} backdrop="static" className={classes.sidebar}>
                    <Offcanvas.Header closeButton className={classes.sidehead}>
                        <Offcanvas.Title><MenuIcon/>MENU</Offcanvas.Title>
                        <hr/>
                    </Offcanvas.Header>
                    <div className={classes.mysidebar}>
                        {items.map((item, index) => <MenuItems key={index} item={item} />)}
                    </div>
                </Offcanvas>
            
            </div>
            </div>
    )
}
export default EmployeeNavigation;
