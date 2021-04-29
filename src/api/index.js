//functions that fetch API
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async() => {
    //try and catch 
    //try executes if api called successfully, else catch
    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
        //same as data.confirmed etc if you write only const {data} abovw then return data.confirmed else plain like here
        return {confirmed,recovered,deaths,lastUpdate};
    } catch(error) {

    }
}