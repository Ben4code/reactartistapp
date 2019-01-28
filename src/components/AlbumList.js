import React from 'react'

export default function AlbumList(props) {

    const showList = (albumList) => {
        if(albumList){
            return albumList.map((item, index)=>{
                return(
                     <img key={index} src={`/images/albums/${item.cover}.jpg`} alt="The title"/>
                )
            })
        }
    }

    

  return (
    <div className="album_list">
        {showList(props.albumList)}  
    </div>
  )
}
