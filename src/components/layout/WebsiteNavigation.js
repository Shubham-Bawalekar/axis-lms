import classes from "./WebsiteNavigation.module.css"
import { Link } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
function WebsiteNavigation(){
    return(
        <div>
            <header className={classes.header}>
                <div className={classes.logo}>Axis Saral</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className={classes.home}>HOME</Link>
                        </li>
                        <li>
                            <Link to="/aboutUs" className={classes.about}>ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={classes.contact}>CONTACT</Link>
                        </li>
                        <li>
                            <Link to="/login" className={classes.login}>LOGIN</Link>
                        </li>                        
                        <li>
                            <Link to="/notification" className={classes.notification}><NotificationsIcon/></Link>
                        </li>
                        
                    </ul>
                </nav>
            </header>

        </div>
    )
}
export default WebsiteNavigation;