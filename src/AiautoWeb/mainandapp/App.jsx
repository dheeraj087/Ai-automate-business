import './index.css'
import { Navebar, Herosection, AboutUs, Footer, Contant, PricingPage, } from './allfile'



function App() {


  return (
    <main className="w-full bg-[url('/bg.webp')] bg-no-repeat bg-bottom-right bg-cover h-auto ">
      <Navebar />
      <Herosection />
      <AboutUs />
      <Contant />
      <PricingPage />
      <Footer />
    </main>

  )
}

export default App
