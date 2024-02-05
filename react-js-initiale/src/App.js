import { Component } from 'react';
import Mycars from './components/Mycars';
import Car from './components/Cars';
import './App.css';


 class  App extends Component  {

  render (){

    return (
      <div className='App'>
      <Mycars/>
      <Car/> 
      </div>
    );

  }
}

export default App;
