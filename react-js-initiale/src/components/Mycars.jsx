import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component{
    render (){

        return (  
            <>
              <h1>{this.props.title}</h1>
              <Car color='red'>Ford</Car>
              <Car olor='green'>Mercedes</Car>
              <Car color="black"></Car>
            </>
        )
    }
}
export default Mycars;