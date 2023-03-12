//weather app
//weather app 

import { useState } from "react";
import { Fetch } from "./get";

export function App7() {
    const [Query, setQuery] = useState("")
    const [weather, setWeather] = useState({})
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const search = async (e) => {
        if (e.code === "Enter") {
            let data = await Fetch(Query)
            setWeather(data)
        }
    }


    return (
        <div id="weather">
            <input type="text" placeholder="Enter City Name...!" onChange={handleChange} onKeyPress={search} />
            {weather.main &&
                <div id="city">
                    <h3>{weather.name}</h3>
                    <span>{weather.sys.country}</span>
                    <div id="temp">
                        {weather.main.temp}<span>&deg;c</span>
                    </div>
                    <div id="info">

                        <p>cloud</p>
                    </div>
                </div>}
        </div>
    )
}