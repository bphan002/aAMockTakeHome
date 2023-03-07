import React from 'react'
import DisplayStars from '../Utilities/starDisplay'
import axios from 'axios'

const PostIndexItem = ({coffee, _id, text, title, rating, caffeine_content }) => {
    //need to get reference of post to cofeee to get cafeeine_content

    const deletePost = async (e) => {
        const {id} = e.target
        const response = await axios.delete(`http://localhost:5000/post/${id}`)

        if (response.statusCode === 200) {
            console.log(response)
        } else {
            console.error(response)
        }
    }
    console.log('postIndexItem')

    return (
        <section onClick={(e)=>deletePost(e)}>
            <h2>{title}</h2>
            <DisplayStars rating={rating}/>
            <p>{text}</p>
            <p id={_id}>{`${coffee} - ${caffeine_content} mg per oz`}</p>
        </section>
    )
}

export default PostIndexItem