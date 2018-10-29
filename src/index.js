import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyAu4BAT9so4_WIpnDhqlbGKdoHIb2P73GI';

// new component: to produce html
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'one piece'}, (videos) => {
            /*console.log(data);*/
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos = { this.state.videos }/>
            </div>
        );
    }
}

// put into the dom
ReactDOM.render(<App />, document.querySelector('.container'));