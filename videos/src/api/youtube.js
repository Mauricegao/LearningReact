import axios from "axios";

const KEY = "AIzaSyC9JhvYWjJNX7aGwIPZy4mVn3NofL0kDDs";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
