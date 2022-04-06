import { React } from "react";
import './Trick.css';

function Trick(props) {
  return (
  <div className='trick'>
    <h2>{props.name}</h2>
    <h2>Obstacle: {props.obstacle}</h2>
    <h2>Link to Tutorial: {props.link}</h2>
  </div>
  )
}

export default Trick;