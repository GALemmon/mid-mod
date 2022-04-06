import { Component } from 'react';
import './App.css';
import fetchCalls from './APICalls';
import TrickContainer from '../TrickContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tricks: null,
    }
  };

  loadTricks = () => {
    fetchCalls.getTricks()
     .then((data) => this.setState({tricks: data}))
    };
  
  componentDidMount = () => this.loadTricks();
  
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        {this.state.tricks && <TrickContainer tricks={this.state.tricks} />}
      </div>
    );
  };
};


export default App;