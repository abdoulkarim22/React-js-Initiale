import { Component } from 'react';
import Car from './components/Cars';
import Mycars from './components/Mycars';
import './App.css';


 class  App extends Component  {



state = {
  titre: ' Mon catalogue Voiture garage' 
}


  render (){

    return (
      <div className='App'>

        <Mycars title={this.state.titre}/>

      </div>
    );

  }
}

export default App;
