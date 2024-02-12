import React, { Component } from "react";
import Car from "./Car";


class Form extends Component{
    render(){
        return(
            <div className="App">
             <Car width="700" height="700" />
              <h1>Commentaires</h1>
              Formulaires
            </div>
        )
    }
}
export default Form;