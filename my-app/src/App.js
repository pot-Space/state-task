import { Component } from 'react';

import './App.css';

class Counter extends Component {
   constructor(props) {
      super(props);
      this.state = {
         handlerCounter: this.props.counter
      }
   }

   increase = () => {
      if (this.state.handlerCounter < 20) {
         this.setState(state => ({
            handlerCounter: state.handlerCounter + 1
         }))
      }
   }

   decrease = () => {
      if (this.state.handlerCounter > -20) {
         this.setState(state => ({
            handlerCounter: state.handlerCounter - 1
         }))
      }
   }

   rand = () => {
      this.setState({
         handlerCounter: Math.floor(-20 + Math.random() * (20 + 1 - (-20)))
      });
   }

   reset = () => {
      this.setState({
         handlerCounter: this.props.counter
      })
   }

   render() {
      return (
         <div>
            <div className="counter">{this.state.handlerCounter}</div>
            <div className="controls">
               <button onClick={this.increase}>INC</button>
               <button onClick={this.decrease}>DEC</button>
               <button onClick={this.rand}>RND</button>
               <button onClick={this.reset}>RESET</button>
            </div>
         </div>
      )
   }
}

function App() {
   return (
      <div className='app'>
         <Counter counter={0} />
      </div>
   )
}

export default App;