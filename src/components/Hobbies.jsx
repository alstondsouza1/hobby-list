import React from 'react';
import Hobby from './Hobby.jsx';

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