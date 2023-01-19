import classes from "./HomePage.module.css"
function HomePage(){
    return( 
        <div> 
            <div className={classes.backgroundpage}></div>
            <div className={classes.heading}>
                <h1>SARAL Learning Portal</h1>
                <br/><br/><br/><br/><br/>
                <p>
                    If Your actions inspire others to dream more,
                    learn more, do more and become more, you are LEADER.
                </p> </div>
                
            
            <div className={classes.page}>
                <video autoPlay loop muted plays-inline className={classes.backvideo}>
                    <source src="https://player.vimeo.com/external/159035843.sd.mp4?s=0d309dd63ee62d4efc5e0e471824ed7fab0f7f85&profile_id=164&oauth2_token_id=57447761"/>
                </video>
                <div className={classes.line1}></div>
                <div className={classes.heading2}>
                    <h1>Everything you need,</h1>
                    <h2>in one place...</h2>    
                </div>
                <div className={classes.line2}></div>
                    
            </div>    
        </div>
    )
}
export default HomePage;
