import React, {useState} from 'react'

const PostHeader = () => {
    const [order, setOrder] = useState("asc")

    const handleClick = (e) => {
        const {name, value} = e.target
        setOrder(value)
    }

    return (
        <>
            <header>
                <div className='left-header'>
                    <h1>Posts</h1>
                    <button>New Post</button>
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