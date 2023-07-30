//Import React
import React from 'react';
import HelloReact from './Components/HelloReact';
import Nav from './Components/Nav';

function App() {
  return (
    <div className='container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10'>
      <HelloReact />
      <Nav />
    </div>
  )
}

export default App;
