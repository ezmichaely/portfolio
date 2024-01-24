"use client"

import { Typewriter } from 'react-simple-typewriter'

const HomeTypeWriter = () => {
  return (
    <Typewriter
      words={[
        '<Frontend Developer />',
        '<Web Designer />',
        // '<Web Developer />',
        '<UX Designer />',
        // '<UI Designer />',
        '<Manga Reader />'
      ]}
      cursor
      loop={true}
      cursorStyle='_'
      typeSpeed={100}
      deleteSpeed={100}
      delaySpeed={1000}
    />
  )
}

export default HomeTypeWriter