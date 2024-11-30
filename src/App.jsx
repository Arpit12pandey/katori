import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroSection/Hero'
import Products from './components/Products/Products'
function App() {
 

  return (
    <>
     <div className='bg-gradient-to-b from-white to-yellow-100 '>
     <Navbar/>
     <Hero/>
     <Products/>
     </div>

    </>
  )
}

export default App
