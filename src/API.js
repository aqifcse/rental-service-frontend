import axios from 'axios';

export default axios.create({
    baseURL: "https://morning-sands-52405.herokuapp.com/rents/",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})
