import React from 'react';

import './Card.css';

const Card = (props) => {
    return(
        <div className="Card">
            <h1>{props.name}</h1>
            <span className="Price">{props.price}</span>
            <div className="Desc"></div>    
            <button>CTA</button>
        </div>

    )
}

export default Card;