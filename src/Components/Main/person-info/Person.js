import "./styles/Person.css";
export  default function Person() {
    return(
        <div className="person-container">
             <div className="person">
                 <img alt="person-img"/>
                 <div className="person-info">
                     <h2>R2-D2</h2>
                     <hr/>
                     <p>Gender: male</p>
                     <hr/>
                     <p>Birth Year: 43</p>
                     <hr/>
                     <p>Eye Color: red</p>
                     <hr/>
                 </div>
             </div>
        </div>
    )
}