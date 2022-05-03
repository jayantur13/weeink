
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Note from './component/Note';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <ToastContainer/>
       <NavBar/>
         <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/home" element={<Home/>}/>
         <Route path="/note" element={<Note/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
