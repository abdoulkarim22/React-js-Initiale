import { Component } from 'react';
import Car from './components/Cars';
import Mycars from './components/Mycars';
import './App.css';


 class  App extends Component  {


 state = {
   titre: ' Mon catalogue Voiture garage'
 }
 ChangeTilte = (e) =>{
  this.setState({
    titre:"Mon niveau titre"
  })
 }

  render (){

    return (
      <div className='App'>

        <Mycars title={this.state.titre}/>
        <button onClick={this.ChangeTilte}>Changer le nom en dur</button>
      </div>
    );

  }
}

export default App;
