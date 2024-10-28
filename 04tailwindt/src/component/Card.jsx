import React from 'react'

function Card({channel}) {
   
    
  return (
   
    <div className="w-60 h-60 rounded-xl">
          <img
            src="https://img.freepik.com/free-photo/heart-shaped-hands-sunset_23-2150169267.jpg?t=st=1730101859~exp=1730105459~hmac=58d3d16800e3e0389af5f0d2e85d0801ee50f69295d36856909fbd0005315a1a&w=996"
            alt="Giphy"
            className="rounded-t-xl"
          />
          <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
            <h1 className="font-bold  font-mono  text-xl">{channel}</h1>
          </div>
        </div>
  )
}

export default Card