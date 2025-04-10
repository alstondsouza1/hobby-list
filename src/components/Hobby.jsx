import React from 'react';

// Hobby component that takes a single hobby object and renders it
function Hobby({ hobby }) {
  const { name, description } = hobby;

  // rendering the hobby details
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Hobby;