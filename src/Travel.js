import React from "react";

const Travel = props => (
    <figure>
        <img src={props.image} alt={props.character} />
        <figcaption>
            <p>
            <em>
            {props.country}
            </em>
            </p>
            {props.destination}
            {props.distance}
        </figcaption>
    </figure>
);

export default Travel 