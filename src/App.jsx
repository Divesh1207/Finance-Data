import { useState } from 'react'
import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Card from './Cards/Card'
import Prices from './Prices/Prices'
import Footer from './Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <NavBar />
      <Hero />


      <Card />
      <Prices />
      <Footer />



    </>
  )
}

export default App
