import 'locomotive-scroll/dist/locomotive-scroll.css'

import { AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { ThemeProvider } from 'styled-components'

import Loader from './components/Loader'
import ScrollTriggerProxy from './components/ScrollTriggerProxy'
import About from './sections/About'
import Programs from './sections/Programs'
import Coached from './sections/Coached'
import Footer from './sections/Footer'
import Home from './sections/Home'
import Contact from './sections/Contact'
import Marquee from './sections/Marquee'
import Styleds from './sections/Styleds'
import GlobalStyles from './styles/GlobalStyles'
import { dark } from './styles/Themes'

import './assets/Fonts/Bodaciou.ttf'

function App() {
  // useLocoScroll();
  const containerRef = useRef(null)
  const [Loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 3000)
  }, [])

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {Loaded ? null : <Loader />}

              <Home key="home" />
              <About key="about" />
              <Programs key="program" />
              <Coached key="Coached" />
              <Styleds key="Styleds" />
              <Marquee key="marquee" />
              <Contact key="contact" />
              <Footer key="Footer" />
            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  )
}

export default App
