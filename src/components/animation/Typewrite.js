import Typewriter from 'typewriter-effect';
import React from 'react'

const Typewrite = ({string}) => {
  return (
    <Typewriter
      options={{
        strings: [
          string
        ],
        autoStart: true,
        loop: false,
        // cursor: null,
        delay: 150,
        deleteSpeed: Infinity,
      }}
    />
  )
}

export default Typewrite
