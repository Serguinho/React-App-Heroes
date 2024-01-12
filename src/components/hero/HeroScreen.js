import {  Navigate, useNavigate, useParams } from "react-router-dom"
import { GetHeroesById } from "../selectors/GetHeroById";
import { useMemo } from "react";


export const HeroScreen = () => {
  
  const {heroId} = useParams();
  const navigate=useNavigate();
  const hero=useMemo(()=>GetHeroesById(heroId),[heroId]);
  const {id,
    alter_ego,
    superhero,
    characters,
    publisher,
    first_appearance}=hero;
  
    const handleReturn=()=>{
      navigate(-1);
      // if(publisher==='Marvel Comics')
      //   return navigate ('/marvel')
      // else
      //   return navigate ('/dc')
  }

 if(!hero){
  return <Navigate to={'/'}/> 
 }
 const imagePath=`/assets/${id}.jpg`;
  return (
    <div>
       <div className="row mt-5">
          <div className="col-4">
              <img 
              src={imagePath}
              alt={superhero}
              className="img-thumbnail animate__animated animate__fadeInLeft"
              ></img>
          </div>
          <div className="col-8 animate__animated animate__fadeInRight">
              <h3>{superhero}</h3>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                  <li className="list-group-item"><b>First appearance:</b> {first_appearance}</li>
                  <li className="list-group-item"><b>Publisher:</b> {publisher}</li>

              </ul>
              <h5 className="mt-3">Characters:</h5>
              <p>{characters}</p>
              <button className="btn btn-outline-info mt-3 "
                      onClick={handleReturn}>
                Back
              </button>
          </div>
       </div>
    </div>
  )
}