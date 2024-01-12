import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";


export const LoginScreen = () => {

  const navegate = useNavigate();


  const {dispatch}=useContext(AuthContext);

  const lastPath=localStorage.getItem('lastPath') || '/marvel'

  const handleLogin=()=>{
    const action={
      type:types.login,
      payload:{name:'Serguey'}
    }
    dispatch(action);
    navegate(lastPath,{
        replace:true
      });

  }
 

  return (
    <div className="container mt-5">
        <h1> Login Screen</h1>
        <hr/>
        <button className="btn btn-primary"
                onClick={handleLogin}>
            Login
        </button>

    </div>
  )
}