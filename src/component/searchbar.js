import React from 'react';
import './searchbar.css'
class SearchBar extends React.Component {

    onChangeText = (e) => {
        this.props.searchMethod(e.target.value)
    }
    render() {
        // console.log(this.state.videos)
        return(
            <div>
                <div className="ui massive icon input">
                    <input 
                        type="text" 
                        placeholder="Altimetrik youtube Search..."
                        onChange={this.onChangeText}
                        />
                    <i className="search icon"></i>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default SearchBar