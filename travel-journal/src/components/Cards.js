import React from 'react';
import icon from './images/red-location-icon.webp'

const Cards = (destination) => {
    console.log(destination)
    return(
        <div className='card-container'>
            <div className='card-image'>
                <img src={`${destination.image}`} alt='unsplash_image' className='card-image-size' />
            </div>
            <div className='card-information'>
                <div className='card-location'>
                    <p>
                        <img src={icon} alt='location_icon' height='12' width='12'/>
                    </p>
                    <p>{destination.location}</p>
                    <p><a href={`${destination.google_map_link}`}>View on Google</a></p>
                </div>
                <div className='card-title'>
                    <h3>{destination.title}</h3>
                </div>
                <div className='card-description'>
                    <p>{destination.start_date} - {destination.end_date}</p>
                    <p>{destination.description}</p>
                </div>
            </div>
        </div>
    )
}
export default Cards;