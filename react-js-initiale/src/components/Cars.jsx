import React from "react";
import {  } from "../styles/StylesCar.css";

const Car = ({children,color,year}) => {

// const colorInfo = color ? (<p>Couleur: {color}</p>) :(<p>Couleur: Néant</p>);

if (children) {
    return(
        <>
           <div className="cars">
            <p>Marque: {children}</p>
            <p>Année: {year}</p>
            <p>Color: {color}</p>
            
            </div>
        </>
       )
    
}else{
 return null;

}
 
}

export default Car