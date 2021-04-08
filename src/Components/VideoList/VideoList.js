import React from 'react';
import VideoItems from '../VideoItems/VideoItems';

const VideoList = ({videos, onVideoSelect}) =>{
    const renderedList = videos.map(((video, index) =>{
        return (
            <VideoItems
                key = {index}
                video = {video}
                onVideoSelect = {onVideoSelect}
            />
        )
    }))
    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList;