
import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        {/* <Route path='/products' element={<Products/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
