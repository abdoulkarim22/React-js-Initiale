import React, { Component } from "react";

class Results extends Component{

    state = {
        name:"Mario",
        winner:false,
    }
    render(){ 


        return(
            this.state.winner ? 
            (
            <h1>Bravo {this.state.name}</h1>
            )
             : 
            (
            <h1>Te pret pour la piscine de 42 Quebec !!!!</h1>
            )
        )
    }
}
export default Results;