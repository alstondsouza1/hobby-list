import React from 'react'
import Hobbies from './components/Hobbies.jsx'

import './App.css'

// app component that uses the Hobbies component
function App() {
  const hobbyList = [
    { name: 'Reading', description: 'Reading books of various genres.' },
    { name: 'Traveling', description: 'Exploring new places and cultures.' },
    { name: 'Cooking', description: 'Experimenting with new recipes.' },
  ];

  // rendering the hobbies component
  return (
    <div>
      <h1>My Hobbies</h1>
      <Hobbies hobbies={hobbyList} />
    </div>
  )
}

export default App
