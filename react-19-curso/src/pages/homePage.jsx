

import data from "../mock-data/mock-data"
import SearchComponent from "../components/searchComponent";
import { useState } from "react";

export default function HomePage() {

    
    const [filteredData, setFilteredData] = useState(data);

    console.log(filteredData);

    // Defino el hanlde event, por ahora lo logueo
    const filterMethod = (event) => {
        console.log(event.target.value);
    }

    return (
        <div className="d-flex justify-content-center align-items-center" >
            <div className="container">
            
            <SearchComponent filterMethod={filterMethod}/>
                <ul className="list-group">
                    {
                        filteredData.map((item, index) => (
                            <li key={index} className="list-group-item">{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}