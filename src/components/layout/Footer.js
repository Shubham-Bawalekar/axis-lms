import { Link } from "react-router-dom";
import classes from "./Footer.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(){

    return(
        <div>
            <footer className={classes.footer}>
                <div className={classes.social}>
                    <ul>  
                        <li>
                            <a href="https://www.facebook.com/axisbank" target="_blank"><FacebookIcon/></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/axisbank" target="_blank"><TwitterIcon/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/axis-bank/?trk=top_nav_home" target="_blank"><LinkedInIcon/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/axis_bank/" target="_blank"><InstagramIcon/></a>
                        </li>
                    </ul>
                </div>
                <div className={classes.para}>
                <p>
                    <Link to="/privacy">Privacy Policy </Link>
                    | Copyright © 2023 Axis Saral
                    </p>                    
                </div>
            </footer>
        </div>
    )

}
export default Footer;