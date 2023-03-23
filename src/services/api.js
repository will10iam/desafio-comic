import axios from "axios";
import md5 from "md5";


const publicKey = 'f9637ebee5dd9aaac395029979fcc4a5';
const privateKey = '176e8b9e795e8e1eb53e66fc95f12483393fbca8';
const timestamp = Number(new Date());
const hash = md5(timestamp + privateKey + publicKey);

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params: {
        ts: timestamp,
        apikey: publicKey,
        hash,
    },
})

export default api;