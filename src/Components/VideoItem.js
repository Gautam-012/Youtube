import './VideoItem.css';
import React from 'react';

const VideoItem = (props) => {

  return(
    <div className="video item" onClick={() => { props.selectedVideo(props.videos) }}>
      <img className="ui image" src={props.videos.snippet.thumbnails.medium.url} alt={props.videos.snippet.description}/>
      <div className="content">
        <div className="header">{props.videos.snippet.title}</div>
      </div>
    </div>
  );  
}

export default VideoItem;