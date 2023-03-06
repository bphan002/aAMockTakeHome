import React, { useEffect, useState } from 'react'
import postSeed from '../../SeedData/post.json'
import PostIndexItem from './PostIndexItem'
import PostModal from './PostModal'



const PostIndex = () => {
    const [ posts, setPosts] = useState('')
    const [ showPostModal, setShowPostModal] = useState(true)

    useEffect(()=> {
        setPosts(postSeed)
    },[])

    return (
        <main>
            {showPostModal && <PostModal/>}
            {postSeed.map((post,idx) =><PostIndexItem {...post} key={idx} />)}
        </main>
    )
}

export default PostIndex