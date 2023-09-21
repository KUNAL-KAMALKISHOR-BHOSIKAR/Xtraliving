import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Performance from './Components/Performance/Performance';
import Products from './Components/Product/Products';
import Parents from './Components/Parents/Parents';
import Athletes from './Components/Athletes/Athletes';
import Workshop from './Components/Workshop/Workshop';
import Func from './Components/Product/Func/Func';
import Collabrate from "./Components/Collabrate/Collabrate"
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Media from './Components/Media/Media';
import One from './Components/Media/Pages/One';
import Two from './Components/Media/Pages/Two';
function App() {
  return (
<div className="App bg-red-500 ">
  <Navbar/>
  <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/performance' element={<Performance/>}/>
    <Route path='/products' element={<Products/> } />
    <Route path='/parents' element={<Parents/>} />
    <Route path='/athletes' element={<Athletes/>}/>
    <Route path='/workshop' element={<Workshop/>} />
    <Route path='/collaborate' element={<Collabrate/>} />
    <Route path='/func' element={<Func/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/media' element={<Media/>} />
    {/* useless pages */}
    <Route path='/media/raise' element={<One/>} />
    <Route path='/media/gogirl' element={<Two/>} />
  </Routes>
  <Footer/>
</div>
  );
}

export default App;
