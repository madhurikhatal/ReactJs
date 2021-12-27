import React from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import Login from './components/login/Login';
import Order from './components/order/index'

import { Provider } from 'react-redux';
import store from './state/store/store';

import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import  Signup  from './components/signup/Signup';
function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md" >
        <Typography color="primary" gutterBottom variant="h2" align="center">Restaurant App</Typography>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />   
          <Route path="/order" element={<Order/>} /> 

        </Routes>


      </Container>
    </Provider>
  );
}

export default App;