import React from 'react'
import Registration from './components/resgistration/registration'
import { Login } from './components/resgistration/login';
import { Home } from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = ()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/registration' element={<Registration />}  />
            <Route path='/login' element={<Login />}  />
            <Route path='*' element={<Home />}/>
        </Routes>       
        </BrowserRouter>
    );
}

export default App;
