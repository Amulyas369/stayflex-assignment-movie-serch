import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import DetailsContainer from '../Container/Details/DetailsContainer'
import Home from '../Container/Home/Home'
import Movies from '../Container/Movies/Movies'
import Search from '../Container/Search/Search'
function RouterContainer() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/details/:movieid/:mediatype' element={<DetailsContainer/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default RouterContainer