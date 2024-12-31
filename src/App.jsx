import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from './Layout'
import IndexPage from './IndexPage'
import LoginPage from './components/Login/LoginPage';
import { UserContextProvider } from './UserContex';
import TrackingPage from './components/Tracking/TrackingPage';
import ProductsPage from './components/ProductsPage/ProductsPage';
function App() {
 

  return (
    <>
    <UserContextProvider>
      <div className='bg-gradient-to-b from-white to-yellow-100 '>
     <Routes>
      <Route path="/" element={<Layout />}>
     <Route index element={<IndexPage/>}/>
     <Route path="/login" element={<LoginPage />} />
     <Route path="/track" element={<TrackingPage />} />
     <Route path="/vedicghee" element={<ProductsPage  name={"GHEE"}/>} />
     <Route path="/cowghee" element={<ProductsPage  name={"COW GHEE"}/>} />
     <Route path="/honey" element={<ProductsPage name={"HONEY "}/>} />
     <Route path="/shilajit" element={<ProductsPage name={"SHILAJIT"}/>} />
     <Route path="/peanutbutter" element={<ProductsPage name={"PEANUT BUTTER"}/>} />
     </Route>
     </Routes>
     </div>
     </UserContextProvider>
    </>
  )
}

export default App
