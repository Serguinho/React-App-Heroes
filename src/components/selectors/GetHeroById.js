import { heroes } from "../../data/heroes"


export const GetHeroesById = (id='') => {


    return heroes.find(hero=>hero.id===id);
  
}