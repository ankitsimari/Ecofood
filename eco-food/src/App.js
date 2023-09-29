
import { useSelector } from 'react-redux';
import './App.css';
import BasicAccordion from './Component/Accordian';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import AllRoutes from './Routes/AllRoutes';


function App() {
  const mode = useSelector(store=>store.ProductsReducer.darkMode)
  return (
    <div className="App" style={{backgroundColor:mode?"black":"#f4f4f4",color:mode?"white":"black"}}>
      {/* <Loader/> */}
      <Navbar/>
      <AllRoutes/>
      <BasicAccordion/>
      <Footer/>
    </div>
  );
}

export default App;
