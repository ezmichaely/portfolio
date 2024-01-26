"use client"

import { Typewriter } from 'react-simple-typewriter'

const HomeTypeWriter = () => {
  return (
    <Typewriter
      words={[
        '<Frontend Developer />',
        // '<Web Developer />',
        // '<Web Designer />',
        '<Graphics Designer />',
        '<UX Designer />',
        '<Manga Reader />'
      ]}
      cursor
      loop={true}
      cursorStyle='|'
      typeSpeed={50}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  )
}

export default HomeTypeWriter