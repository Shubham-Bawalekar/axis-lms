import classes from "./EmployeeDashboardPage.module.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import FeedIcon from '@mui/icons-material/Feed';
import CampaignIcon from '@mui/icons-material/Campaign';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import axios from "axios";
import {  useLocation, useNavigate } from "react-router-dom";

function EmployeeDashboardPage(){


    return(
        <div>
            <div className={classes.fullpage}>
            <div className={classes.upblock}>
                <div className={classes.backgroundpage}></div>
                <div className={classes.heading}>
                    <h1>Welcome To Axis SARAL</h1>
                    <br/><br/><br/><br/>
                </div>
            </div>
            <div className={classes.page}>
                <video autoPlay loop muted plays-inline className={classes.backvideo}>
                    <source src="https://player.vimeo.com/external/194096190.sd.mp4?s=dee63d78883ffd1721877e6e7e51c185ca8f5d85&profile_id=164&oauth2_token_id=57447761"/>
                </video>  
                <div className={classes.heading2}>
                <h1>News Feed</h1>
                <div className={classes.line1}></div>
                <p>NEWS literacy is the ability to use 
                        critical thinking skills to judge the reliability
                        and credibility of news reports and information sources.
                    </p>
                    <p>If you want to aware with latest news then
                        you can click on News Explore and you can get 
                        every news of our company in one place.
                    </p>
                    <Link to="/news-feed" className={classes.btn}><b>News Explore</b><ArrowRightAltIcon/></Link>
                     
                </div>
                
                    
            </div>    
            
            
            
           
            </div>       
        </div>
    )
}
export default EmployeeDashboardPage;