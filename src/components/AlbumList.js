import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios'; //instead of fetch could be used: axios.get

class AlbumList extends Component {
    constructor(props) {//props - parent to child communication
        super(props);
        
        this.state = {// state - components internal record keeper
                      // state - a plain js object used to record and respond to user-triggered events
                      // to update what a component shows, call 'this.setState', change state only with it
                      // anytime state is changed, component is re-render
            albums: []
        };
    }
    


    componentWillMount() {//anytime component is about to render to the screen, automatically will be called
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}))
    }

    renderAlbums() {//best for key is id
        return this.state.albums.map((album) =>
            <AlbumDetail key={album.title}  album={album} />)
    }

    render() {
        console.log(this.state.albums);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }

}
        
export default AlbumList;