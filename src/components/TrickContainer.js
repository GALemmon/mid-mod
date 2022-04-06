import { React } from 'react';
import './TrickContainer.css';
import Trick from './Trick';

const TrickContainer = (props) => {
  const tricksToDisplay = props.tricks.map((trick) => {
    return <Trick key={trick.id} id={trick.id} name={trick.name} obstacle={trick.obstacle} link={trick.tutorial} />
  })

  return (
    <div className='trick-container'>
      {tricksToDisplay}
    </div>
  )
};

export default TrickContainer;
