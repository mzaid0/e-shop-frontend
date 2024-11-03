import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Category from './components/Category'
import Category2 from './components/Category2'
import Services from "./components/Services"
import Banner from "./components/Banner"
import headphones from './assets/hero/headphone.png'
import smartWatch2 from './assets/category/smartwatch2-removebg-preview.png'
import Products from "./components/Products"
import Blog from "./components/Blog"
import Partners from "./components/Partners"
import Footer from "./components/Footer"
import PopupForm from "./components/PopupForm"
import { useState,useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const BannerData = {
  discount: "30 % OFF ",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphones,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate accusamus itaque quidem dolorum, quod corporis non repudiandae ratione harum aperiam!",
  bgColor: "#f42c37"
}
const BannerData2 = {
  discount: "30 % OFF ",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartWatch2,
  title2: "Smaet Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate accusamus itaque quidem dolorum, quod corporis non repudiandae ratione harum aperiam!",
  bgColor: "#2dcc6f"
}
const App = () => {
  const [orderPopup, setorderPopup] = useState(false)

  const handleOrderPopup = () => {
    setorderPopup(!orderPopup)
  }

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      offset:100,
    })
    AOS.refresh()
  }, [])
  

  return (
    <div className="bg-white dark:bg-gray-900 duration-200 overflow-hidden">
      <NavBar handleOrderPopup={handleOrderPopup}/>
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data = {BannerData} />
      <Products/>
      <Banner data = {BannerData2} />
      <Blog/>
      <Partners/>
      <PopupForm orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
      <Footer/>
    </div>
  )
}

export default App