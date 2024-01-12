import { Route, Routes  } from "react-router-dom"
import { SearchScreen } from "../components/search/SearchScreen"
import { DcScreen } from "../components/dc/DcScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { Navbar } from "../components/ui/Navbar"
import { HeroScreen } from "../components/hero/HeroScreen"

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
            <Route path="/dc" element={<DcScreen/>}/>
            <Route path="/marvel" element={<MarvelScreen/>}/>
            <Route path="/search" element={<SearchScreen/>}/>
            <Route path="/hero/:heroId" element={<HeroScreen/>}/>
            <Route path="/" element={<MarvelScreen/>}/>
        </Routes> 
        </div>
       
    </>
  )
}