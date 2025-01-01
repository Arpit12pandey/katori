import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from './Layout'
import IndexPage from './IndexPage'
import LoginPage from './components/Login/LoginPage';
import { UserContextProvider } from './UserContex';
import TrackingPage from './components/Tracking/TrackingPage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import ProdDescription from './components/ProdDescription/ProdDescription';
import vedicGheeImg from './assets/VedicGhee.jpg'
import Ghee3 from './assets/ghee3.jpg'
import HoneyImg from './assets/Honey.jpg'
import ShilajitImg from './assets/Shilajit2.jpg'
import ButterImg from './assets/PeanutButter.jpg'
import GoldImg from './assets/NandlalGold.jpg'
import {description} from './components/BlogsSection/Summaries'

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
     <Route path="/naturalgold" element={<ProductsPage name={"NATURAL GOLD"} />} />
     <Route path="/gheedesc" element={<ProdDescription name={" VEDIC GHEE"} image={vedicGheeImg} description={description. VedicGhee}/>} />
     <Route path="/honeydesc" element={<ProdDescription name={"HONEY"} image={Ghee3 }  description={description.Honey}/>} />
     <Route path="/shilajitdesc" element={<ProdDescription name={"SHILAJIT"}   image={HoneyImg } description={description.Shilajit} />} />
     <Route path="/butterdesc" element={<ProdDescription name={"PEANUT BUTTER"}  image={ShilajitImg} description={description. PeanutButter} />} />
     <Route path="/cowgheedesc" element={<ProdDescription name={" COW A2 GHEE"} image={ButterImg} description={description.GheeA2Cow} />} />
     <Route path="/golddesc" element={<ProdDescription name={"NATURAL GOLD"} image={GoldImg}  description={description.NaturalGold} />} />
     </Route>
     </Routes>
     </div>
     </UserContextProvider>
    </>
  )
}

export default App
