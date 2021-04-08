import React from 'react';
import './videoItem.modules.css';

const VideList = ({video, onVideoSelect}) => {
    return ( 
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img
                src={video.snippet.thumbnails.medium.url}
                className='ui image'
                alt={video.snippet.title}
            />
                <div className="content">
                    <div className='header'>{video.snippet.title}</div>
                </div>
        </div>
     );
}
 
export default VideList;