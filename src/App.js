import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import ManageProducts from './Pages/ManageProducts/ManageProducts'
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import AddItem from './Pages/AddItem/AddItem';
import MyItems from './Pages/MyItems/MyItems';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/manageProducts' element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>}
        ></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>}
        ></Route>

        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>

        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div >
  );
}

export default App;
