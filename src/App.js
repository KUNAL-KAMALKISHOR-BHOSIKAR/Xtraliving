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
import Three from './Components/Media/Pages/Three';
import Four from './Components/Media/Pages/Four';
import Profile from './Components/Profile/Profile';
import Eight from './Components/Media/Pages/Eight';
import Five from './Components/Media/Pages/Persons/Five';
import Six from './Components/Media/Pages/Persons/Six';
import Seven from './Components/Media/Pages/Persons/Seven';
import Nine from './Components/Media/Pages/Nine';

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
    <Route path='profile' element={<Profile/>}/>
    {/* useless pages */}
    <Route path='/media/raise' element={<One/>} />
    <Route path='/media/gogirl' element={<Two/>} />
    <Route path='/media/championship' element={<Three/>} />
    <Route path='/media/bootcamp' element={<Four/>} />
    <Route path='/media/doctor' element={<Five/>}/>
    <Route path='/media/romanov' element={<Six/>}/>
    <Route path='/media/sudhir' element={<Seven/>}/>
    <Route path='/media/quiz' element={<Eight/>}/>
    <Route path='/media/awareness' element={<Nine/>}/>
  </Routes>
  <Footer/>
</div>
  );
}


export default App;
