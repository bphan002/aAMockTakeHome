import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const PostModal = ({modalState}) => {
    const [showPostModal, setShowPostModal] = useState(modalState)
    const [newPost, setNewPost] = useState({
        title: '',
        coffee: 'black',
        rating: '',
        text: '',
    })


    //need a reference to get all the different kinds of coffee
    //lets give it the name coffees
    const coffees = ['Black','Latte','Espresso']
    console.log('modal')

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/post',newPost)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleChange = e => {
        const {name, value} = e.target
        console.log('name',name)
        console.log('value',value)
        setNewPost(prevState => ({...prevState, [name]:value}))
    }

    const postModalRef = useRef()

    useEffect(() => {
        function clickOutside(e) {
            document.addEventListener("mousedown",(e) => {
                if (!postModalRef.current?.contains(e.target)) {
                    setShowPostModal(false)
                }
            })
        }
        clickOutside()
        return () => {
            document.removeEventListener("mousedown",clickOutside)
        }
    },[showPostModal])

    console.log(newPost)
    return (
        <>
        {showPostModal &&
        <div  className='post-modal'>
            <form ref={postModalRef} onSubmit={(e) => handleSubmit(e)}>
                <h2>Create Post</h2>

                <div className='post-title-input-grp'>
                    <label htmlFor="title"></label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title"
                        placeholder='Title'
                        required
                        onChange={e => handleChange(e)} 
                    />
                </div>

                <div className='post-rating-select-input-grp'>
                    <div>
                        <label htmlFor="rating"></label>
                        <input 
                            type="number" 
                            name="rating" 
                            min="1" 
                            max="5" 
                            id="rating"
                            placeholder='Rating'
                            required 
                            onChange={e => handleChange(e)} 
                        />
                    </div>

                    <div>
                        <label htmlFor="coffee">Coffee</label>
                        <select name="coffee" id="coffee" onChange={handleChange} >Coffee
                            {coffees.map((coffee,idx) => <option value={coffee} key={idx}>{coffee} </option>)}
                        </select>    
                    </div>

                </div>

                <textarea 
                    name="text"
                    id="text" 
                    cols="34" 
                    rows="15"
                    placeholder='Post Text'
                    onChange={e => handleChange(e)} 
                />
                <button className='btn-post' type="submit">submit</button>
            </form>
        </div>}
        </>
    )
}


export default PostModal