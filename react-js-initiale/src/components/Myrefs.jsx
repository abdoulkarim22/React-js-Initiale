


import React, { Component } from 'react'

 class Myrefs extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         value:''
      }
      this.MyTitle = React.createRef();

      this.Myinput = React.createRef();

    }
    update = (event) =>{
    this.setState({
        value: event.target.value
    })
    }
    componentDidUpdate(prevProps, prevState) {
        this.MyTitle.current.style.color = "red";
    }
    hanclick = () => {
      console.log(this.Myinput.current.value);
    }
    
  render() {
    return (

      <div className='App'>
        <h1 ref={this.MyTitle}>Valeur: {this.state.value}</h1>
        {/* <input type="text" value={this.state.value} onChange={this.update} /> */}
        <input ref={this.Myinput}    type="text" />
        <button onClick={this.hanclick}>Valider</button>
      </div>
    )
  }
}

export default Myrefs
