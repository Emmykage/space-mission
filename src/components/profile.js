import React from "react";
import { useSelector } from "react-redux";
const Profile = ()=>{
    const missionTrips = useSelector(state => state.missions);
    const rocketTrips = useSelector(state => state.rockets);
    const myMissions = missionTrips.filter(trip => trip.status === true)
    const myRocketTrips = rocketTrips.filter(trip => trip.reservation === true)
    console.log(myRocketTrips)
    return(
<div>

    <ul>
  
       
        <h2>missions</h2>

        {myMissions.map(element => (
           
                 <li>{element.name}</li>
        )
       
            
)}
    </ul>
    <ul>
  

</ul>
<ul>
    <h2>Rocket Trips</h2>
    {myRocketTrips.map(trip => (
        <li>
            {trip.title}
        </li>
    ))}
</ul>
   
</div>
    )
}
export default Profile