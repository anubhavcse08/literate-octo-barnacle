import React from 'react';
import SearchBar from '../component/searchbar';
import '../component/searchbar.css'
import VideoList from '../component/videoList';
import VideoDetail from '../component/videoDetails';

class Main extends React.Component {
    state = {
        videos:[],
        selectedVideo: null
    }

    // componentDidMount() {
    //     this.onSearchMethod('buildings');
    // }

    onSearchMethod = async (data) => {
        // const youtubeApi = this.props.data.videoData;
        const response = await this.props.data.videoData.get('/search', {
            params: {
                q: data
            }
        }) 
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }
    
    onSelectVideo = (video) => {
        this.setState({selectedVideo:video})
    }
    
    render() {
        // console.log(this.state.videos);
        return(
            <div className="ui fluid container">
                <SearchBar searchMethod={this.onSearchMethod}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onSelectVideo={this.onSelectVideo} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main