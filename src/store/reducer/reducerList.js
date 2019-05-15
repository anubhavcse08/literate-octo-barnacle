export default function(state={}, action) {
    switch (action.type) {
        case 'YOUTUBE_API':
            return {...state, videoData:action.payload}
                
        default:
            return state
    }
}