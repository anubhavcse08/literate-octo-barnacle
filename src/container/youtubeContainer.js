import React from 'react';
import { connect } from 'react-redux'
import {getYoutubeApi} from '../store/action'
import { bindActionCreators } from 'redux';
import Main from './main';

class YoutubeContainer extends React.Component {

    componentDidMount() {
        this.props.getYoutubeApi();
    }
    render() {
        // console.log('API',this.props.data)
        return (
            <div>
                <Main {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.videoData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getYoutubeApi},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeContainer)