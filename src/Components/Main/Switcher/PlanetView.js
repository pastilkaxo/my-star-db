export default function PlanetView({planet}) {
    return(
        <>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} alt=""/>
            <div className="planet-info">
                <h1>Planet Name: {planet.planetName} </h1>
                <hr/>
                <p>Population: {planet.population}</p>
                <hr/>
                <p>Rotation Period: {planet.rotationPeriod}</p>
                <hr/>
                <p>Diameter: {planet.diameter}</p>
            </div>
        </>
    )

}