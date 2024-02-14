import React, { Component } from "react";
import Car from "./Car";
import './styles/Mycss.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends Component{
    render(){
        const Myclass = this.props.head ? 'blue' : 'red' ;
        return(
            <div className="App">
                <h1 className="blue">Commentaire</h1>
              <p className={`${Myclass} bigFont`}>I am red or blue</p>
              <button className="btn btn-danger">Valider</button>
            </div>
        )
    }
}
export default Form;