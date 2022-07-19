import React from "react"

const ItemRocket = (props) =>{
    const {title, description, image } = props
    return(
        <li>
            <div className="row">
                <div className="display">
                <img src={image} ></img>

            </div>
            <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button type='button'>Reserve Rocket</button>
            
            </div>

            </div>
           
            
          

        </li>
      
         
     

    )

}
export default ItemRocket