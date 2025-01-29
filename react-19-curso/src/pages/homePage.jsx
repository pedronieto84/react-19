

import data from "../mock-data/mock-data"
import SearchComponent from "../components/searchComponent";

export default function HomePage() {

    const mockData = data

    console.log(mockData);
    return (
        <div className="d-flex justify-content-center align-items-center" >
            <div className="container">
            <SearchComponent />
                <ul className="list-group">
                    {
                        mockData.map((item, index) => (
                            <li key={index} className="list-group-item">{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}