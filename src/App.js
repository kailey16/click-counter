import React from 'react';
import './App.css';
import Button from './Button'
import Showbox from './Showbox'

class App extends React.Component {

  state = {
    count: 0
  }

  buttonClicked = () => {
    this.setState({count: this.state.count + 1})
  }

  resetTheCount = () => {
    this.setState({count: 0})
  }

  render() {
    return (
      <div className="App">
        <Button clicked={this.buttonClicked} reset={this.resetTheCount} />
        <Showbox count={this.state.count} />
      </div>
    );
  }

}

export default App;
