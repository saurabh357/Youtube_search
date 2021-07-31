import axios from 'axios';
const KEY = 'AIzaSyAXB2IUdqNQvh_fK9VpbOhwMtQjYMYIdws';

export default axios.create(
    {
        baseURL:'https://www.googleapis.com/youtube/v3',
        params:{
            part:'snippet',
            maxResults: 5,
            key: KEY,
        }
    }
);
