import Education from "./components/Education"
import Footer from "./components/Footer"
import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/Navbar"
import "./index.css"
import asetgue from  "./src/assets/computers.jpg"



function App() {
  

  return (
    <>
      <div>
      <h1>
          
      </h1>
        <Navbar/>
        <Jumbotron/>
        <Education/>
        <Footer/>
        <img src={asetgue} alt="background" />
      </div>
    </>
  )
}

export default App