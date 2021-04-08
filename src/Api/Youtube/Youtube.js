import axios from 'axios';
const KEY = 'AIzaSyD0GJi5lCxamj5wkJWIbPg1Vv9rFNIEo-o';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResult : 5,
        type: 'video',
        key : KEY,
    }
});