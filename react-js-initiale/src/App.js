import { Component } from 'react';
import Car from './components/Cars';
import './App.css';


 class  App extends Component  {

  render (){

    return (
      <div className='App'>

      <h1>Hello REACT JS</h1>

        <Car color='red'>Ford</Car>
        <Car olor='green'>Mercedes</Car>
        <Car color="black"></Car>
      </div>
    );

  }
}

export default App;
