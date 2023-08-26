import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
// import Media from './Components/Media/Media/Media';
import Performance from './Components/Performance/Performance';
import Products from './Components/Product/Products';
import Parents from './Components/Parents/Parents';
import Athletes from './Components/Athletes/Athletes';
import Workshop from './Components/Workshop/Workshop';
import Func from './Components/Product/Func/Func';
function App() {
  return (
<div className="App bg-red-500 ">
  <Navbar/>
  <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/performance' element={<Performance/>}/>
    {/* <Route path='/media' element={<Media/>} />  */}
    <Route path='/products' element={<Products/> } />
    <Route path='/parents' element={<Parents/>} />
    <Route path='/athletes' element={<Athletes/>}/>
    <Route path='/workshop' element={<Workshop/>} />
    <Route path='/func' element={<Func/>} />
  </Routes>
  <Footer/>
</div>
  );
}

export default App;
