import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import MyNavbar from './Components/Navbar';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import NewsPost from './Pages/NewsPost';
import CourseDetails from './Pages/CourseDetails';
import { RegistrationProvider } from './Contexts/RegistrationContext';
import Register from './Components/RegistrationForms';
import Footer from './Components/Footer';

function App() {

  return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <RegistrationProvider>
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route 
        path= '/courses/:courseId'
        element= {<CourseDetails/>}/>
      <Route path='/news' element={<NewsPost/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </RegistrationProvider>
    
    </div>

      
      </>
  )
}

export default App
