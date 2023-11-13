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

    async getPerson  (id)  {
        const person = await this.getRequest(`/people/${id}/`)
        return this._transformPerson(person)
    }

    async getAllPeopple(){
        const res = await this.getRequest(`/people/`);
        return res.results.map(this._transformPerson)

    }

    async getAllPlanets(){
        const res = await this.getRequest(`/planets/`);
        return res.results.map(this._transformPlanet)

    }

    async getPlanet  (id){
         const planet = await this.getRequest(`/planets/${id}/`)
           return this._transformPlanet(planet)
    }

    async getAllShips(){
        const res = await this.getRequest(`/starships/`);
        return res.results.map(this._transformShip);
    }

    async getShip (id)  {
        const ship = await this.getRequest(`/starships/${id}/`);
        return this._transformShip(ship)
    }


_extractId(item){
    const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
}
    _transformShip(ship){
        return(
            {
                id: this._extractId(ship),
                name:ship.name,
                model: ship.model,
                manufacturer: ship.manufacturer,
                costInCredits: ship.costInCredits,
                length: ship.length,
                crew: ship.crew,
                passengers: ship.passengers,
                capacity: ship.capacity

            }

        )
    }

    _transformPerson(person){
        return(
            {
                id: this._extractId(person),
                name:person.name,
                gender:person.gender,
                birthYear: person.birthYear,
                eyeColor: person.eyeColor
            }

        )
    }


    _transformPlanet(planet){
        return(
            {
                id: this._extractId(planet),
                planetName:planet.name,
                population:planet.population,
                rotationPeriod:planet.rotation_period,
                diameter:planet.diameter
            }

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
