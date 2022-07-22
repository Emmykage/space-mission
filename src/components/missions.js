import React, { useEffect, useState } from "react"
import ListMission from "./ItemMission"
import './mstyle.css'
import { useSelector, useDispatch } from "react-redux/es/exports"
import { getMission } from "../redux/missions/missions"

const Mission = () =>{
const missions = useSelector(state=> state.missions )
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getMission())
},[])

    return(
       
        <div  className="content-container"> 
        <div className="small-container">
        <table>
            <thead>
                <tr>
                    <th>Mission</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            { missions.map(mission =>(
            <ListMission key={mission.id} id={mission.id} name={mission.name} description={mission.description} status={mission.status} />)
           )}
                
            </tbody>
         
        </table>
        </div>

        </div>
    )

}
export default Mission