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

 chageViaParams = (titre) =>{
  this.setState({
    titre: titre
  })
 }


 chageViaBind = (param) =>{
  this.setState({
    titre: param
  })
 }

 chageViaBind = (e) => {
    
 }

  render (){

    return (
      <div className='App'>

        <Mycars title={this.state.titre}/>
        <button onClick={this.ChangeTilte}>Changer le nom en dur</button>
        <button onClick={() => this.chageViaParams('Titre via un params')}>Via params</button>
        <button onClick={this.chageViaBind.bind(this,'Titre via Bind')}>Via Bind</button>
        <input type='text' onChange={this.chageViaInput} value={this.state.titre} />
      </div>
    );

  }
}

export default App;
