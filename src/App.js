import './App.css';

import { Routes, Route } from 'react-router-dom'
import Barchart from './components/Charts/Barchart'
import Home from './components/Home/Home';
import Listing from './components/Listing/Listing';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Barchart />}></Route>
          <Route path='listing' element={<Listing />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
