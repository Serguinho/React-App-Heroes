import { useContext } from "react"
import { AuthContext } from "../auth/authContext";
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({children}) => {
const {user} = useContext(AuthContext);

  
    return user.logged
            ? <Navigate to={'/marvel'}/>
            : children
}