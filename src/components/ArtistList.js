import React from 'react'
import {Link} from 'react-router-dom';


export default function ArtistList(props) {

    console.log(props.allArtists)
    const list = (props) => {

        
        return props.allArtists.map(artist => {
            const style =  {
                background: `url('/images/covers/${artist.cover}.jpg')no-repeat`
            }
            return (
                <Link key={artist.id} className="artist_item" to={`/artist/${artist.id}`} style={style}>
                    <div>{artist.name}</div>
                </Link>
            )
        })
    }

    return (
        <div className="artist_list">
            <h4>Browse the Artists</h4>
            {list(props)}
        </div>
    )
}
