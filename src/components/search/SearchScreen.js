
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../customsHooks/useForm";
import { HeroCard } from "../hero/HeroCard";
import { GetHeroByName } from "../selectors/GetHeroByName";
import { useMemo } from "react";

export const SearchScreen = () => {

  const navigate=useNavigate();
  const location =useLocation();

  const {q=''}=queryString.parse(location.search);

  const [formValues,handleInputChange]=useForm({searchText:q})

  const {searchText}=formValues;
  const heroesFiltred=useMemo(()=>GetHeroByName(q),[q]);

  const handleSearch=(e)=>{
    e.preventDefault();
    navigate(`?q=${searchText}`)
  }
  return (
    <div>
        <h1> Searches</h1>
        <hr/>
        <div className="row">
          <div className="col-5">
              <h4>Search</h4>
              <hr/>
              <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search hero"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={handleInputChange}
                  />
              </form>
              <button 
              type="Submit"
              onClick={handleSearch}
              className="btn btn-outline-primary mt-3">
                Search
              </button>
          </div>
          <div className="col-7">
              <h4>Results</h4>
              <hr/>

              {
                (q==='')
                ? <div className="alert alert-info">Search Hero</div>
                :(heroesFiltred.length===0)&& <div className="alert alert-danger">no found hero: {q}</div>
              }
              {
                heroesFiltred.map(hero=>(
                  <HeroCard
                    key={hero.id}
                    {...hero}
                  />
                ))
              }
             

          </div>
        </div>
    </div>
  )
}