import { heroes } from "../../data/heroes"



export const GetHeroesByPublisher = (publisher) => {
    const validPublishes=['Marvel Comics','DC Comics']
    if(!validPublishes.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }
 
    return heroes.filter(hero=>hero.publisher===publisher);
  
}