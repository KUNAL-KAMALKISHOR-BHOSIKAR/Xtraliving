import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Media from './Components/Media/Media/Media';
import Performance from './Components/Performance/Performance';
import Products from './Components/Product/Products';
function App() {
  return (
<div className="App bg-red-500 ">
  <Navbar/>
  <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/performance' element={<Performance/>}/>
    <Route path='/media' element={<Media/>} /> 
    <Route path='/products' element={<Products/> } />
  </Routes>
  <Footer/>
</div>
  );
}

export default App;
