import React from 'react'
import './App.css';
import Form from './components/Forms';
import LifeCycle from './components/LifeCycle';
import ChildComponent from './components/ChildComponent';



function App() {
  return (
    <>
    <ChildComponent/>
    </>
  )
}

export default App










//  class  App extends Component  {


// //  state = {
// //    titre: ' Mon catalogue Voiture garage'
// //  }
// //  ChangeTilte = (e) =>{
// //   this.setState({
// //     titre:"Mon niveau titre"
// //   })
// //  }

// //  chageViaParams = (titre) =>{
// //   this.setState({
// //     titre: titre
// //   })
// //  }


// //  chageViaBind = (param) =>{
// //   this.setState({
// //     titre: param
// //   })
// //  }

// //  chageViaInput = (e) => {
// //     console.log(e.target.value);
// //     this.setState({
// //       titre : e.target.value
// //     })
// //  }

//   render (){

//     return (
//       <div className='App'>
       
//       </div>
//     );

//   }
// }

// export default App;
