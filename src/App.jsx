import React,{ useEffect } from 'react';
import { LoginPage } from './pages/LoginPage';
import { GlobalStyles } from './components/common/Global';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Root } from './pages/Root';
import { DashBoardPage } from './pages/DashBoardPage';
import { BookingPage } from './pages/BookingPage';
import { Rooms } from './pages/Rooms';
import { ContactPage } from './pages/ContactPage';
import { UsersPage } from './pages/UsersPage.jsx';
import { EditUser } from './pages/EditUser';
import { CreateRoom } from './pages/CreateRoom';
import { Provider } from 'react-redux'
import { store } from './app/store.js'

export const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  useEffect(() => {
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          {isLoggedIn ? (
            <Route path='/root' element={<Root />}>
              <Route path='/root/dashboard' element={<DashBoardPage />} />
              <Route path='/root/booking' element={<BookingPage />} />
              <Route path='/root/rooms' element={<Rooms />} />
              <Route path='/root/contact' element={<ContactPage />} />
              <Route path='/root/users' element={<UsersPage />} />
              <Route path='/root/edituser' element={<EditUser />} />
              <Route path='/root/createroom' element={<CreateRoom />} />
            </Route>
          ) : (
            <Route path='*' element={<Navigate to='/' />} />
          )}
        </Routes>
      </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};