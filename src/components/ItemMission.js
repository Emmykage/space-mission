import React from "react";
import { joinMembership } from "../redux/missions/missions";

import { useDispatch } from "react-redux";


const ItemMission = (props)=>{
    const { name, description, status, id} = props;
  

 const dispatch = useDispatch()
    function handleMember(){
      
        dispatch(joinMembership(id))

    }
    
    return(
       
        <tr>
            <td> {name}</td>
            <td><p>{description}</p></td>
            <td className="small"><span className={status? `mark` : null }>{status? `Active member` : `Not a member`}</span></td>
            <td className="small"> <button type="button" onClick={handleMember}>{status? `cancel membership` : `join membership`} </button></td>
        </tr>
    )
}
export default ItemMission