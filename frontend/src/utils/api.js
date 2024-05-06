import axios from 'axios';

export async function api() {
    let url = `http://127.0.0.1:8000/api/planets/`;
    const res = await axios.get(url);
    return res.data;
}