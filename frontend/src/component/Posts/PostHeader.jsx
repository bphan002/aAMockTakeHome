import React, {useState, useEffect, useRef} from 'react'
import PostModal from './PostModal'

const PostHeader = () => {
    const [order, setOrder] = useState("asc")
    const [ showPostModal, setShowPostModal] = useState(false)

    const handleClick = (e) => {
        const {name, value} = e.target
        setOrder(value)
    }

    const showModal = () => {
        setShowPostModal(true)
    }

    const postModalRef = useRef()

    useEffect(() => {
        document.addEventListener("mousedown",(e) => {
            if (!postModalRef.current.contains(e.target)) {
                setShowPostModal(false)
            }
        })
    })

    return (
        <>
            <header>
                <div>
                    {showPostModal && <PostModal/>}
                </div>
                <div ref={postModalRef} className='left-header'>
                    <h1>Posts</h1>
                    <button onClick={showModal}>New Post</button>
                </div>
                <select name='order' onChange={(e)=> handleClick(e)}>
                    <option value="asc">asc</option>
                    <option value="dsc">dsc</option>
                </select>
            </header>
        </>
    )
}

export default PostHeader