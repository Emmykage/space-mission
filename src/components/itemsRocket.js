// import React, { useState } from "react"
import { useDispatch} from "react-redux/es/exports"
import { toggleReservation } from "../redux/rockets/rocketdata"

const ItemRocket = (props) =>{
    
    const dispatch = useDispatch()
    const {title, description, image, id, reserve} = props
  

    const handleReserve = () =>{
        dispatch(toggleReservation(id))
        
            
    }
     
    return(
        <li>
            <div className="row">
                <div className="display">
                <img src={image} ></img>

            </div>
            <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button id={id} type='button' onClick={handleReserve}>{reserve ? `cancel reservation` : `reserve rocket`  }</button>
            
            </div>

            </div>
           
            
          

        </li>
      
         
     

    )

}
export default ItemRocket