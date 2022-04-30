import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import ManageProducts from './Pages/ManageProducts/ManageProducts'
import Inventory from './Pages/Inventory/Inventory';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageProducts' element={<ManageProducts></ManageProducts>}></Route>

        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>

      </Routes>
    </div>
  );
}

export default App;
