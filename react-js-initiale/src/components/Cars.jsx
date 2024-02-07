import React from "react";
import {  } from "../styles/StylesCar.css";

const Car = ({children,color,year}) => {

// const colorInfo = color ? (<p>Couleur: {color}</p>) :(<p>Couleur: Néant</p>);

if (children) {
    return(
        <>
         
            <p>Marque: {children}</p>
            <p>Année: {year}</p>
            <p>Color: {color}</p>

        </>
       )
    
}else{
 return null;

}
 
}

export default Car