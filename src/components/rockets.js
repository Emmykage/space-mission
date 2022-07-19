import React, { useState } from "react";
import ItemRocket from "./itemsRocket";
const Rocket = ()=>{
    const [rockets, setRocket] =useState([
        {
            id: 1,
            title: "falcon one",
            description: 'jdfjh dkhdghj ghfkai d sokhjkd soi dfkhidioaso eflasposjdj doijfd doiikdaifuieri wspiodjpdsort oirturtjrir rotirtiruyrjhgh etietht',
            image: './rocketsssssss.jpg'

        },
        {
            id: 1,
            title: "falcon two",
            description: 'jdfjh dkhdghj ghfkai d sokhjkd soi dfkhidioaso eflasposjdj doijfd doiikdaifuieri wspiodjpdsort oirturtjrir rotirtiruyrjhgh etietht',
            image: './rocketsssssss.jpg'

        }
    ])
    return(
        <div className="content-container">
           
            <div className="page-contain">
            <div  className="items"> 
            <ul> 
                {rockets.map(rocket =>(
                   <ItemRocket key={rocket.id} title={rocket.title} description={rocket.description} image={rocket.image}/>
                ))}

</ul>
            </div>
</div>
        </div>
    )
}
export default Rocket