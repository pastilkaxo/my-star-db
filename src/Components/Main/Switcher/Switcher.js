import './styles/switcher.css'
import {useEffect, useState} from "react";
import SwapiService from "../../../Services/Service";
import Spinner from "../Spinner/Spinner";
import Error  from "../404/Error";
import PlanetView from "./PlanetView";
export default function  Switcher() {

const swapiService = new SwapiService();
const [planet,setPlanet] = useState({});
const [loading , setLoading] = useState(true)
const [error , setError] = useState(false);
    const onPlanetLoaded =(planet) => {
             setPlanet(planet)
               setLoading(false)
    }


    const onError = (err) => {
         setError(true)
        setLoading(false)
    }


    useEffect(() => {
        const updatePlanet =()=> {
            const id = Math.floor(Math.random()*20 + 3)
            swapiService
                .getPlanet(id)
                .then((planet) => {
                       onPlanetLoaded(planet)

                })
            .catch(onError)
        }
        updatePlanet();

    }, []);

    const hasData = !(loading || error);
    const errorMsg = error ? <Error/> : null
    const spinner = loading ? <Spinner/> : null
    const  content = hasData ? <PlanetView planet={planet}/> : null

    return(
      <div className="wrapper">
          <div className="switcher-container">
              {errorMsg}
              {spinner}
              {content}
          </div>
      </div>
    )


}