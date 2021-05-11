import axios from "axios";

let options = {
    baseURL: " https://api.sampleapis.com/futurama"
}
let axiosInstance = axios.create(options);

const getUsers = () => {
    console.log('getUsers');
    return axiosInstance.get('/characters'); // promise
};

const getInventar = () => {
    console.log('getUsers');
    return axiosInstance.get('/inventory'); // promise
};
export {
    getUsers, getInventar, axiosInstance
}