import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  
  const video = props.videos.map(videos => {
  return <VideoItem videos={videos} key={videos.id.videoId} selectedVideo={props.selectedVideo}/>
  });

  return(
    <div className="ui relaxed divided list">
      {video}
    </div>
  );
}


export default VideoList;