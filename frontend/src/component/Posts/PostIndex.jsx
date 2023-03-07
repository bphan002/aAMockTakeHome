import React, { useEffect, useState } from 'react'
import postSeed from '../../SeedData/post.json'
import PostIndexItem from './PostIndexItem'
import axios from 'axios'
const PostIndex = () => {
    const [ posts, setPosts] = useState(null)
    const [ loading, setLoading] = useState(true)

    useEffect(()=> {
        const fetchPosts = async () => {
            const result = await axios(`http://localhost:5000/post`)
            setPosts(result.data)
            setLoading(false)
         }
        fetchPosts()
    },[])

    return (
        <>
            {loading && <div>Loading...</div>}
            {!loading && (
                <main>
                    {posts && posts.map((post,idx) =><PostIndexItem {...post} key={idx} />)}
                </main>)}
        </>
    )
}

export default PostIndex