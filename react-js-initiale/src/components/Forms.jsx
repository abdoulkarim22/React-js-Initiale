import React, { Component } from "react";
import Car from "./Car";

const titreRed = {
    color:'red',
    fontSize:'50px'
}

class Form extends Component{
    render(){
        return(
            <div className="App">
              <h1 style={titreRed}>Commentaires</h1>
              <button>Valider</button>
            </div>
        )
    }
}
export default Form;