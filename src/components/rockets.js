import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRocketData } from "../redux/rockets/rocketdata";
import ItemRocket from "./itemsRocket";
const Rocket = ()=>{
    const rockets = useSelector((state) => state.rockets);
    const dispatch =  useDispatch()
    useEffect(()=>{
        dispatch(getRocketData())

    }, []);
    return(
        <div className="content-container">
           
            <div className="page-contain">
            <div  className="items"> 
            <ul> 
                {rockets.map(rocket =>(
                   <ItemRocket key={rocket.id} title={rocket.title} description={rocket.description} image={rocket.image} id={rocket.id} reserve={rocket.reservation}/>
                ))}

</ul>
            </div>
</div>
        </div>
    )
}
export default Rocket