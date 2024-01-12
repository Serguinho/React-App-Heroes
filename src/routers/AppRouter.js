import { BrowserRouter, Route, Routes  } from "react-router-dom"
//import { SearchScreen } from "../components/search/SearchScreen"
import { LoginScreen } from "../components/login/LoginScreen"
import { DashboardRoutes } from "./DashboardRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"



export const AppRouter = () => {
  return (
    
    <BrowserRouter>
   
        <Routes>
           
            {/* <Route path="/login" element={<LoginScreen/>}/> */}
            <Route path="/login" element={
                  <PublicRoutes>
                      <LoginScreen/>
                  </PublicRoutes>
                  }

                />
            <Route path="/*" element={
                  <PrivateRoutes>
                      <DashboardRoutes/>
                  </PrivateRoutes>
                  }

                />

            {/* <Route path="/*" element={<DashboardRoutes/>}/> */}

        </Routes>
    </BrowserRouter>
  )
}