import { render } from "@testing-library/react";
import { React } from "react";
import './Trick.css';

function Trick(props) {
  render() {
    return <div>
      <h1>{props.name}</h1>
      <h2>Obstacle: {props.obstacle}</h2>
      <h2>Link to Tutorial: {props.link}</h2>
    </div>
  }

}

export default Trick;