import {useState} from "react";

export default class SwapiService {

    _urlName = "https://swapi.dev/api";
    async getRequest(url){
        const res = await  fetch(`${this._urlName}${url}`);
        if(!res.ok) {
            throw new Error(`Невозможно получить данные: ${res.status}`);
        }
        return await res.json();
    }

    getAllPerson = (id) => {
        return this.getRequest(`/people/${id}/`)
    }

    async getAllPeopple(){
        const res = await this.getRequest(`/people/`);
        return res.results

    }

    async getAllPlanets(){
        const res = await this.getRequest(`/planets/`);
        return res.results

    }

    async getPlanet  (id){
         const planet = await this.getRequest(`/planets/${id}/`)
           return this._transformPlanet(planet)
    }

    async getAllShips(){
        const res = await this.getRequest(`/starships/`);
        return res.results
    }

    getShip = (id) => {
        return this.getRequest(`/starships/${id}/`)
    }

    _transformPlanet(){
        const [planetId ,setPlanetId] =useState(null);
        const [planetName, setPlanetName] = useState(null);
        const [planetImg , setPlanetImg] = useState(null);
        const [population , setPopulation] =useState(null);
        const  [diameter,setDiameter] = useState(null);
        const [rotationPeriod, setRotationPeriod] = useState(null);
        return(
        setPlanetId(id),
        setPlanetName(planet.name),
        setDiameter(planet.diameter),
        setPopulation(planet.population),
        setRotationPeriod(planet.rotation_period)
        )
    }



}

//
// const  swapi = new SwapiService();
// // swapi.getAllPeopple().then((body) => {
// //     body.forEach((el) => {
// //         console.log(el.name)
// //     })
// //
// swapi.getAllPerson(3).then((body) => {
//     console.log(body.name);
// }) ;
