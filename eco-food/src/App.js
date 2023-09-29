
import './App.css';
import BasicAccordion from './Component/Accordian';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import SingleCardPage from './Component/Sagar/SingleCardPage';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App" style={{backgroundColor:"#f4f4f4",color:"black"}}>
      {/* <Loader/> */}
      <Navbar/>
      <AllRoutes/>
      <BasicAccordion/>
      <Footer/>
    </div>
  );
}

export default App;
