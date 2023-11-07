import './styles/switcher.css'
import {useEffect, useState} from "react";
import SwapiService from "../../../Services/Service";

export default function  Switcher() {

const swapiService = new SwapiService();

    useEffect(() => {

        const updatePlanet =()=> {
            const id = Math.floor(Math.random()*20 + 3);
            swapiService.getPlanet(id)
                .then((planet) => {
                    setPlanetId(id)
                    setPlanetName(planet.name)
                    setDiameter(planet.diameter)
                    setPopulation(planet.population)
                    setRotationPeriod(planet.rotation_period)

                });
        }
        updatePlanet();

    }, []);


    return(
      <div className="wrapper">
          <div className="switcher-container">
              <img src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`} alt=""/>
              <div className="planet-info">
                  <h1>Planet Name: {planetName} </h1>
                  <hr/>
                  <p>Population: {population}</p>
                  <hr/>
                  <p>Rotation Period: {rotationPeriod}</p>
                  <hr/>
                  <p>Diameter: {diameter}</p>
              </div>
          </div>
      </div>
    )


}