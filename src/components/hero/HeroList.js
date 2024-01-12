import { HeroCard } from "./HeroCard";
import { GetHeroesByPublisher } from "../selectors/GetHeroesByPublisher";
import { useMemo } from "react";



const HeroList = ({publisher}) => {
 
    // const heroes=GetHeroesByPublisher(publisher);
    const heroes=useMemo(()=>GetHeroesByPublisher(publisher),[publisher]);
    return (
    <div className="row rows-cols-1 row-cols-3 g-3 animate__animated animate__fadeIn">

        
        {
          heroes.map(hero=>(
            <HeroCard key={hero.id}
               {...hero}  
            />
           
          ))  
        }  

    </div>
  )
}

export default HeroList
