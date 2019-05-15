import React from "react";
import './videoItem.css';

const VideoItem = ({video, onSelectVideo}) => {
    return(
        <div onClick={() =>onSelectVideo(video)} className="video-item item">
            <img 
                alt={video.snippet.title}
                className="ui image" 
                src={video.snippet.thumbnails.medium.url}>
            </img>
            <div className="content">
                <div className="header"> {video.snippet.title}</div>
            </div>
        </div>
    )  
}

export default VideoItem