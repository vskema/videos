import axios from 'axios';

const KEY = 'AIzaSyDEoSD0LSlLSb_RO-tNQCvOxBXe9hjHBRs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

