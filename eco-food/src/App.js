
import './App.css';
import BasicAccordion from './Component/Accordian';
import Dishes from './Component/Dishes';
import Footer from './Component/Footer';
import Fruits from './Component/Fruits';
import Hero from './Component/Hero';
import HeroSection from './Component/HeroSection';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#f4f4f4",color:"black"}}>
      {/* <Navbar/> */}
      {/* <Hero/> */}
      <HeroSection/>
      <Fruits/>
      <Dishes/>
      <BasicAccordion/>
      <Footer/>
    </div>
  );
}

export default App;
