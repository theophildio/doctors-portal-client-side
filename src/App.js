import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Authentication/Login/Login';
import RequireAuth from './Pages/Authentication/RequireAuth';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Page404 from './Pages/Page404/Page404';
import Reviews from './Pages/Reviews/Reviews';
import Header from './Pages/SharedPages/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
    </div>
  );
}

export default App;
