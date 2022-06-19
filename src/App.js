import './App.css';

import { Routes, Route } from 'react-router-dom'
import Barchart from './components/Charts/Barchart'
import Home from './components/Home/Home';
import Listing from './components/Listing/Listing';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth';
import Register from './components/Login/Register';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }>
          <Route index element={<Barchart />}></Route>
          <Route path='listing' element={<Listing />}></Route>
        </Route>

        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
