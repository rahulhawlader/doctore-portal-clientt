import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appointment from './Pages/Apporment/Appointment';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';

import Navber from './Pages/Shared/Navber';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequreAuth from './Pages/Login/RequreAuth';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppoinment from './Pages/DashBoard/MyAppoinment';
import MyReview from './Pages/DashBoard/MyReview';
import MyHistory from './Pages/DashBoard/MyHistory';
import AllUsers from './Pages/DashBoard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment" element={
          <RequreAuth>
            <Appointment />
          </RequreAuth>

        }></Route>
        <Route path="/dashboard" element={
          <RequreAuth>
            <DashBoard />
          </RequreAuth>

        }>
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="allUsers" element={<RequireAdmin>
            <AllUsers></AllUsers>
          </RequireAdmin>}></Route>

        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
