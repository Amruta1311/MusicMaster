import React from 'react';

const Artist = ({ artist }) => {

    if (!artist) return null;

    const { images, name, followers, genres } = artist;   //destructuring all the values

    return (
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            <img 
                src={images[0] && images[0].url} 
                alt='artist-profile'
                style={{
                    width: 200,
                    height: 200,
                    borderRadius:100,
                    objectFit: 'cover'  //resizes the image in case it is not in the ratio of 1:1 (width:height)
                    
                }}
                />
        </div>
    )
}


export default Artist;