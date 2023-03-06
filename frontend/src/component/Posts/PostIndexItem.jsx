import React from 'react'
import DisplayStars from '../Utilities/starDisplay'

const PostIndexItem = ({coffee, text, title, rating, caffeine_content }) => {
    //need to get reference of post to cofeee to get cafeeine_content
    return (
        <section>
            <h2>{title}</h2>
            <DisplayStars rating={rating}/>
            <p>{text}</p>
            <p>{`${coffee} - ${caffeine_content} mg per oz`}</p>
        </section>
    )
}


export default PostIndexItem