import {
  Main, About, Projects, Contact
} from '@/components/sections'
import ScrollTop from '@/components/shared/ScrollTop/ScrollTop'

export default function Home() {
  return (
    <main>
      <Main />
      <About />
      <Projects />
      <Contact />
      <ScrollTop />
    </main>
  )
}
