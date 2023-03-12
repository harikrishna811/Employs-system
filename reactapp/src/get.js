


import axios from "axios"




const API_KEY = "412e19d45a8d061bda24c9b54b88ce7e"
const URL = "https://api.openweathermap.org/data/2.5/weather"

export const Fetch = async (Query) => {
    let { data } = await axios.get(URL, {
        params: {
            q: Query,
            units: "metric",
            APPID: API_KEY

        }
    })
    return data
}



