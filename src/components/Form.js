import { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      stance: null,
      name: '',
      obstacle: 'flatground',
      link: '',
    }
  }

  handleStanceChange = (event) => {
    let value = event.target.value;
    this.setState({stance: value})
  }

  handleObstacleChange = (event) => {
    let value = event.target.value;
    this.setState({obstacle: value})
  }

  handleSubmit = (event) => {
    alert('You submitted stuff!');
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <select name="stance" value={this.state.stance} onChange={this.handleStanceChange} >
          <option value="" >Choose your stance</option>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>
        <input type="text" value="Name Of Trick"/>
        <select name="obstacle" value={this.state.obstacle} onChange={this.handleObstacleChange} >
          <option value="flatground">Flat Ground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select>
        <input type="text" value="Link to Tutorial"/>
        <input type="submit" value="Send It!" />
      </form>
    )
  }
};

export default Form