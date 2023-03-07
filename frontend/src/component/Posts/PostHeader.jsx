import React, {useState, useEffect, useRef} from 'react'
import PostModal from './PostModal'

const PostHeader = () => {
    const [order, setOrder] = useState("asc")
    const [ showModal, setShowModal] = useState(false)

    const handleClick = (e) => {
        const {name, value} = e.target
        setOrder(value)
    }

    const handleShow = () => {
        setShowModal(true)
    }
    console.log('postheader showModal',showModal)
    return (
        <>
            <header>
                <div className='left-header'>
                    <h1>Posts</h1>
                    <button onClick={handleShow}>New Post</button>
                </div>
                <select name='order' onChange={(e)=> handleClick(e)}>
                    <option value="asc">asc</option>
                    <option value="dsc">dsc</option>
                </select>
                    {showModal && <PostModal modalState={showModal} />}
            </header>
        </>
    )
}

export default PostHeader