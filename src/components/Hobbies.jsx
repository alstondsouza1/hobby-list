import React from 'react';
import Hobby from './Hobby.jsx';

// Hobbies component that takes a list of hobbies and renders them
function Hobbies({ hobbies }) {
    return (
        <div>
            {hobbies.map((hobby, index) => (
                <Hobby key={index} hobby={hobby} />
            ))}
        </div>
    );
}

export default Hobbies;