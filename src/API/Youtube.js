import Axios from 'axios';

const KEY = ""; //key is removed due to security points

export default Axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
  part: 'snippet',
  maxResults: 5,
  key: KEY
}
});