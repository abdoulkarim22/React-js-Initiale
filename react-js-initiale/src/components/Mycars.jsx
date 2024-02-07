import React, { Component,Fragment } from "react";
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
    const updatedstate = this.state.voitures.map((param) => {
        return param.year -= 10;
    })


    this.setState ({
        updatedstate
    })
}

    render (){ 

        const newyear = new Date().getFullYear();  

        return ( 
            <>
             <div>

             <h1>{this.props.title}</h1> 
             <button onClick={this.addYear}>+10 ans</button>
              <Car color={this.state.voitures[0].color} year={ newyear - this.state.voitures[0].year + 'ans'}>{this.state.voitures[0].name}</Car>
              <Car color={this.state.voitures[1].color} year={ newyear - this.state.voitures[1].year + 'ans'}>{this.state.voitures[1].name}</Car>
              <Car color={this.state.voitures[2].color} year={ newyear - this.state.voitures[2].year + 'ans'}>{this.state.voitures[2].name}</Car>
        
             </div>
            </>
        )
    }
}
export default Mycars;