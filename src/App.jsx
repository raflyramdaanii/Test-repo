import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About us/About'
import Layanan from './Components/Layanan/Layanan'
import Partner from './Components/Partner/Partner'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
function App() {
  
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <About setPlayState={setPlayState}/>
      <Layanan />
      <Partner />
      <Contact />
      <Footer />
      <div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </div>
  )
}

export default App
