import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SurveyComponent from "../components/SurveyComponent"
function Profile(){
    return(
        <>
        <div className="Profile">
            <a href="/Home">Go Back Home</a>
            <div className="Circle">
                <img src=""/>
            </div>
            <div id="Username">
                <p>Username:</p>
            </div>
            <div id="Email">
                <p>Email:</p>
            </div>
            <div id="Player">
               <p>Favorite Players:</p> 
            </div>
            <div className="favPlayers">
                <p>Dropdown Voting:</p>
                <SurveyComponent/>
            </div>
        </div>
        
        </>
    )
}
export default Profile;

