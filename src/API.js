import axios from 'axios';

export default axios.create({
    baseURL: "http://morning-sands-52405.herokuapp.com/rental/movies",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})