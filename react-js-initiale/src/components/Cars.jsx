import React from "react";
import {  } from "../styles/StylesCar.css";

const Car = ({children,color}) => {

const colorInfo = color ? (<p>Couleur: {color}</p>) :(<p>Couleur: Néant</p>);

if (children) {
    return(
        <>
           <div className="cars">
            <p>Marque: {children}</p>
              {colorInfo}
            </div>
        </>
       )
    
}else{

 return (
    <div className="cars">
       <p>pas de data!</p>
    </div>
 )

}
 
}

export default Car