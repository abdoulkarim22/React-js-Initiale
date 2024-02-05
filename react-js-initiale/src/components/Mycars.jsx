import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component{


noCopy = () => {
  alert('merci de ne pas copier le texte')
}

addStyle = (e) =>{
   console.log(e.target);

   if (e.target.classList.contains('styled')) {
    e.target.classList.remove("styled");
   }else{
    e.target.classList.add("styled");
   }
}

    render (){
        return (  
            <>
             <div>
             <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>
              <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit.sed, mus.</p>
              <Car color='red'>Ford</Car>
              <Car olor='green'>Mercedes</Car>
              <Car color="black"></Car>
             </div>
            </>
        )
    }
}
export default Mycars;