import React, { useState } from "react";
import ItemRocket from "./itemsRocket";
const Rocket = ()=>{
    const [rockets, setRocket] =useState([
        {
            id: 1,
            title: "falcon one",
            description: 'jdfjh dkhdghj ghfkai d sokhjkd soi dfkhidioaso eflasposjdj doijfd doiikdaifuieri wspiodjpdsort oirturtjrir rotirtiruyrjhgh etietht',
            image: './iuiufjgiofufuhigghuiogu'

        },
        {
            id: 1,
            title: "falcon two",
            description: 'jdfjh dkhdghj ghfkai d sokhjkd soi dfkhidioaso eflasposjdj doijfd doiikdaifuieri wspiodjpdsort oirturtjrir rotirtiruyrjhgh etietht',
            image: './iuiufjgiofufuhigghuiogu'

        }
    ])
    return(
        <div className="content-container">
            <div className="display">
                {rockets.map(rocket =>(
                   <ItemRocket key={rocket.id} title={rocket.title} description={rocket.description} image={rocket.image}/>
                ))}


            </div>

        </div>
    )
}
export default Rocket