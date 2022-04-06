import { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      stance: '',
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

  handleNameChange = (event) => {
    let value = event.target.value;
    this.setState({name: value})
  }

  handleLinkChange = (event) => {
    let value = event.target.value;
    this.setState({link: value})
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
        <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Name of Trick" />
        <select name="obstacle" value={this.state.obstacle} onChange={this.handleObstacleChange} >
          <option value="flatground">Flat Ground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select>
        <input type="text" placeholder="Link to Tutorial" value={this.state.link} onChange={this.handleLinkChange}/>
        <input type="submit" value="Send It!" />
      </form>
    )
  }
};

export default Form