import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './pages/Login'
import { GlobalStyles } from './components/common/Global'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Root } from './pages/Root'
import { DashBoard } from './pages/DashBoard'
import { Booking } from './pages/Booking'
import {Rooms} from './pages/Rooms'
import {Contact} from './pages/Contact'
import {Users} from  './pages/Users'
import { EditUser } from './pages/EditUser'
import { CreateRoom } from './pages/CreateRoom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/root' element={<Root/>}>
          <Route path='/root/dashboard' element={<DashBoard/>}></Route>
          <Route path='/root/booking' element={<Booking/>}></Route>
          <Route path='/root/rooms' element={<Rooms/>}></Route>
          <Route path='/root/contact' element={<Contact/>}></Route>
          <Route path='/root/users' element={<Users/>}></Route>
          <Route path='/root/edituser' element={<EditUser/>}> </Route>
          <Route path='/root/createroom' element={<CreateRoom/>}> </Route>
        </Route>
      </Routes>
        
    
    </BrowserRouter>
    
  </React.StrictMode>,
)

