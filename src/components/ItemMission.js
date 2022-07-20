import React from "react";
import { joinMembership } from "../redux/missions/missions";
import './mstyle.css'
import { useDispatch } from "react-redux";


const ItemMission = (props)=>{
    const { name, description, status, id} = props;
console.log(status)
 const dispatch = useDispatch()
    function handleMember(){
        console.log(id)
        dispatch(joinMembership(id))

    }
    
    return(
        <li className="missList">
          
                <div className="row">
                <div className="mission b-right"><h2>{name}</h2></div>
                <div  className="description b-right"><p>{description}</p></div>
                <div className="status b-right"><span>{status? `Active member` : `Not a member`}</span></div>
                <div className="empty b-right" onClick={handleMember}><button type="button" id={id}>Join Mission</button></div>
                </div>
                
       
        </li>
    )
}
export default ItemMission