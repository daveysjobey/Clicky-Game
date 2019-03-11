import React from "react";


// function Card(props) {
//   return (
//     <div className="section">
//     <div className="tile is-12 onClick={() => props.clickCount(props.id)}">
//       <div className="image is-128x128 is-square">
//         <img alt={props.name} src={props.image} />
//       </div>
//     </div>
//     </div>
    
//   );
// }

const Card = props => (
  <div className="section">
  <div className="card tile is-12" onClick={() => props.clickCount(props.id)}>
    <div className="image is-128x128 is-square">
      <img alt={props.name} src={props.image} />
    </div>
    </div>
  </div>
);

export default Card;
