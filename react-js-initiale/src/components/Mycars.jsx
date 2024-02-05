import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component{

// noCopy = () => {
//   alert('merci de ne pas copier le texte')
// }

state = {
    voitures : [
        {
          name: "Ford",
          year: "2000",
          color:"red",
        },
        {
          name: "Mercedes",
          year: "1876", 
          color:"green",
        },
        {
          name: "Yaris",
          year: "1879",
          color:"Black",
        }
    ]
}

addYear = () => {
    console.log(true);
}

    render (){
        return (  
            <>
             <div>

             <h1>{this.props.title}</h1> 
             <button onClick={this.addYear}>+10 ans</button>
              <Car color={this.state.voitures[0].color} year={this.state.voitures[0].year}>{this.state.voitures[0].name}</Car>
              <Car color={this.state.voitures[1].color} year={this.state.voitures[1].year}>{this.state.voitures[1].name}</Car>
              <Car color={this.state.voitures[2].color} year={this.state.voitures[2].year}>{this.state.voitures[2].name}</Car>
             </div>
            </>
        )
    }
}
export default Mycars;