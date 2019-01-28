import React, { Component } from 'react'
import Banner from './Banner';
import ArtistList from './ArtistList';
import axios from 'axios';


const URL_ARTISTS = "http://localhost:3004/artists";

class Home extends Component {
    
    state = {
        artists: []
    }

    componentDidMount(){
        axios.get(URL_ARTISTS)
        .then(res =>{
            this.setState({
                artists: res.data 
            })
        })
    }

  render() {
    return (
      <div>
        <Banner/>
        <ArtistList allArtists={this.state.artists}/>
      </div>
    )
  }
}


export default Home;