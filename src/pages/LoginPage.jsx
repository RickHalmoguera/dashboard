// LoginPage.js

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonStyled } from '../components/Button/ButtonStyled'
import { FormStyled } from '../components/Form/FormStyled'
import { InputStyled } from '../components/Form/InputStyled'
import { LabelStyled } from '../components/Form/LabelStyled'
import { Logo } from '../components/Logo/Logo'
import { LoginContainer } from '../components/Login/LoginContainer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../context/AuthContext'


export const LoginPage = () => {
  const { login } = useAuth();
  const loginError = () =>
    toast.error("Can't login, please use the data in the placeholders")
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleUserInput = (e) => {
    setUser(e.target.value)
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user !== 'Ricardo' || password !== 'test') {
      loginError()
    } else {
     login()
      navigate('/root/dashboard')
    }
  }

  return (
    <LoginContainer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Logo />
      <FormStyled>
        <LabelStyled>User</LabelStyled>
        <InputStyled
          value={user}
          type="text"
          placeholder="Ricardo"
          onChange={handleUserInput}
        />

        <LabelStyled>Password</LabelStyled>

        <InputStyled
          value={password}
          type="password"
          name="password"
          placeholder="test"
          onChange={handlePasswordInput}
        />
      </FormStyled>
      <ButtonStyled
        type="submit"
        onClick={handleSubmit}
        $bg="#135846"
        $fc="#FFF"
      >
        Login
      </ButtonStyled>
    </LoginContainer>
  )
}

