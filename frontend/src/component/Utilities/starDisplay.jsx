import React from 'react'
import stars from '../../assets/star-solid.svg'

const DisplayStars = ({rating}) => {

    let numberofStars= []
    for (let i = 0; i < rating; i++) {
        numberofStars.push(<img style={{ height:20}} src={stars} alt="star"/>)
    }

    return (
        <p>{numberofStars.map(star => star)}</p>
    )

}

export default DisplayStars