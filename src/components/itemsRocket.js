import React from "react"

const ItemRocket = (props) =>{
    const {title, description} = props
    return(
        <div className="page-contain">
            <div  className="items"> 
          <img ></img>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

        </div>

        </div>
        
    )

}
export default ItemRocket