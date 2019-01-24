import React, { Component } from 'react'
import Banner from './Banner';
import ArtistList from './ArtistList';

//const URL_ARTISTS = "http://localhost:3004/artists"

class Home extends Component {
    
    state = {
        artists: 'Test'
    }


  render() {
    return (
      <div>
        <Banner/>
        <ArtistList db={this.state.artists}/>
      </div>
    )
  }
}


export default Home;