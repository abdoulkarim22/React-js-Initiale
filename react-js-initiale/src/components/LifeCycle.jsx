import React, { Component } from 'react'

 class LifeCycle extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
         name:"Toto",
         step: 1 
        }
        console.log(`Etape ${this.state.step} : je suis dans constructeur()`);
      }
   componentDidMount(){
  
    }
  render() { 
    console.log(`Etape ${this.state.step} : je suis dans render()`);
    return (
      <div>
        {    console.log(`Etape ${this.state.step} : mise a jour`)}
        <h1>Chargement: {this.state.step}</h1>
        <h3>Nom: {this.state.name}</h3>
      </div>
    )
  }
}

export default LifeCycle
