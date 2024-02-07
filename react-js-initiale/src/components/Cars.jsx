import React from "react";
import {  } from "../styles/StylesCar.css";

const Car = ({children,color,year}) => {

// const colorInfo = color ? (<p>Couleur: {color}</p>) :(<p>Couleur: Néant</p>);

if (children) {
    return(
        <>
            <tr>
              <td><p>Marque: {children}</p></td>
              <td><p>Année: {year}</p></td>
              <td><p>Color: {color}</p></td>
            </tr>
        </>
       )
    
}else{
 return null;

}
 
}

export default Car