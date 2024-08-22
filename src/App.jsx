import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

function App() {

  return (
    <>
    <Header/>
    <Routes>

      <Route path='/' element={<Landing/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact-me' element={<Contact/>}/>

      

    </Routes>
     < Footer/>

     
    </>
  )
}

export default App
