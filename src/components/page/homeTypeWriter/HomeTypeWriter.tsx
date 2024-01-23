"use client"

import { Typewriter } from 'react-simple-typewriter'

const HomeTypeWriter = () => {
  return (
    <Typewriter
      words={[
        '<Frontend Developer />',
        '<UX Designer />',
        '<Manga Reader />'
      ]}
      cursor
      loop={true}
      cursorStyle='_'
      typeSpeed={50}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  )
}

export default HomeTypeWriter