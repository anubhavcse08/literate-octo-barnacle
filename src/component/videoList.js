import React from "react";
import VideoItem from "./videoItem";


const VideoList = ({videos, onSelectVideo}) => {
    const renderVideoList = videos.map(video => {
        return <VideoItem key={video.id.videoId} onSelectVideo={onSelectVideo} video={video}/>
    })
    
    return(
        <div className="ui relaxed divided list">
            {renderVideoList}
        </div>
    )
}

export default VideoList