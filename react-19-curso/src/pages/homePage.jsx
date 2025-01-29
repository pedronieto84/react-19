

import data from "../mock-data/mock-data"
import SearchComponent from "../components/searchComponent";
import { useState } from "react";
import {filterItemsHook } from "../hooks/filterItemsHook";

export default function HomePage() {

    const initialArray = data
    
    const [filteredData, setFilteredData] = useState(data);

    console.log(filteredData);

    // Defino el hanlde event, por ahora lo logueo
    const filterMethod = (event) => {
        
        //const keyboardValue = event.target.value;
        const filteredItems = filterItemsHook(initialArray)
        setFilteredData(filteredItems)
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