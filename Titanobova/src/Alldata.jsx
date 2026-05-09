import React from 'react'
import Home from './home'
import About from './About'

const Alldata = () => {
  return (
    <div 
      id="home" 
      style={{ 
      
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
     
      }}
    >
      {/* Wrap content that shouldn't scroll horizontally */}
      <div style={{ overflowX: 'hidden' }}>
        <Home/> 
      <About/>
      </div>
    </div>
  )
}

export default Alldata