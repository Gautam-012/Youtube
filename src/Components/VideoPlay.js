import React from 'react';

const VideoPlay = ({ video }) =>{

  if(!video){
    return(<div>Loading..</div>);
  }

  const src = `https://www.youtube.com/embed/${video.id.videoId}` ;
  
  return(
    <div>
      <div className="ui embed">
        <iframe src={src}  title={video.id.videoId} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>   
    </div>
  );
} 

export default VideoPlay;