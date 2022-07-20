import React, { useEffect, useState } from "react"
import ListMission from "./ItemMission"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { getMission } from "../redux/missions/missions"

const Mission = () =>{
const missions = useSelector(state=> state.missions )
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getMission())
},[])

    //  const [missions, setMIssions] = useState()
    return(
        <div  className="content-container"> 
        <div className="small-container">
        <ul>
           { missions.map(mission =>(
            <ListMission key={mission.id} id={mission.id} name={mission.name} description={mission.description} status={mission.status} />)
           )}
        </ul>
        </div>

        </div>
    )

}
export default Mission