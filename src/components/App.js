import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

const KEY = 'AIzaSyDEoSD0LSlLSb_RO-tNQCvOxBXe9hjHBRs';

class App extends React.Component {

    state = { videos: [] };

    onTermSubmit = async term => {
        const responce = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY
            }
        });

        this.setState({videos: responce.data.items});
    };


    render() {
        return (
            <div className= "ui container">
                <div>
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                    <VideoList videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

export default App;