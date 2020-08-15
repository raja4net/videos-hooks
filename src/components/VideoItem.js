import React from 'react';

const VideoList = ({video}) => {
    return (<div>
        <img src={video.snippet.thumbnails.medium.url} alt="" />
        {video.snippet.title}
    </div>);
};

export default VideoList;