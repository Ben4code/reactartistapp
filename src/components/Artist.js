import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import AlbumList from './AlbumList';

class Artist extends Component {
  state={
    artist: {}
  }

  componentDidMount(){
    axios.get(`http://localhost:3004/artists/${this.props.match.params.artistId}`)
        .then(res =>{
            this.setState({
                artist: res.data 
            })
        })
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="artist_bio">
          <div className="avatar">
            <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg')no-repeat`}}></span> 
          </div>
          <div className="bio">
            <h3>{this.state.artist.name}</h3>
            <div className="bio_text">
              {this.state.artist.bio}
            </div>
          </div>
          <AlbumList albumList={this.state.artist.albums}/>
        </div>
      </div>
    )
  }
}

export default Artist;