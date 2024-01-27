import {
  AboutSection, ContactSection,
  HomeSection, ProjectsSection,
  ScrollToTop
} from '@/components'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      <ScrollToTop />
    </>
  )
}

export default HomePage