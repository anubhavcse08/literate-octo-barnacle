import axios from 'axios';

const KEY = "AIzaSyA5X-tVhNMtVbsoiZIdqKYJMIdmUHw72X0"

export function getYoutubeApi() {
    const request = axios.create({
                        baseURL: 'https://www.googleapis.com/youtube/v3',
                        params:{
                            part: 'snippet',
                            maxResults: 5,
                            key: KEY,
                            // q: 'surfboards'
                        }
                    });

    return {
        type: 'YOUTUBE_API',
        payload: request
    }
}