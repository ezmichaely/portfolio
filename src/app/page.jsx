import {
  Main, About,
  Projects, Contact
} from '@/components/sections'
import { ScrollTop } from '@/components/shared'

export default function Home() {
  return (
    // <>
    //   <Main />
    //   <About />
    //   <Projects />
    //   <Contact />
    //   <ScrollTop />
    // </>
    <main>
      <Main />
      <About />
      <Projects />
      <Contact />
      <ScrollTop />
    </main>
  )
}
