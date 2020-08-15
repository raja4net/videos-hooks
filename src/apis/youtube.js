import axios from 'axios';
const KEY = 'AIzaSyDQkvntjrZf_Y33bd65HwzsmfOxb6isRTA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});