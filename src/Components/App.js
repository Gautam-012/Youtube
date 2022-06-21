import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../API/Youtube';
import VideoList from './VideoList';
import VideoPlay from './VideoPlay';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state={ video: [], selectedVideo: null };
  }

  componentDidMount(){
    this.searchTerm( 'stories' );
  }

  searchTerm = async (term) => {
    const videos = await Youtube.get('search/',{
      params:{
        q:term
      }
    });

    this.setState({ video: videos.data.items, selectedVideo: videos.data.items[0] });
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }
  
  render(){
    return(
      <div className="ui container">
       <SearchBar term={this.searchTerm} />
       <div className="ui grid">
         <div className="ui row">
            <div className="eleven wide column"> 
              <VideoPlay video={this.state.selectedVideo} />
            </div>
            <div className=" five wide column">
              <VideoList videos={this.state.video} selectedVideo={this.onVideoSelect} />
            </div>
         </div>
       </div>
      </div>
    );
  }
}


export default App;