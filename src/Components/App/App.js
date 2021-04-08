import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import youtube from '../../Api/Youtube/Youtube';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail'

class App extends Component{


    componentDidMount() {
        this.onTermSubmit('Racing');
    }
    state = {
        videos : [],
        selectedVideo : null,
    }

    onTermSubmit = async term =>{
        const response = await youtube.get('/search',{
            params:{
                q : term
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    }

    onVideoSelect = video => {
        this.setState({selectedVideo : video})
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;