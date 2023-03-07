import React, { useState, useEffect} from 'react'


const PostModal = () => {
    const [post, setPost] = useState({
        title: '',
        coffee: 'black',
        rating: '',
        text: '',
    })

    useEffect(() => {
        // fetch('http://127.0.0.1:5174:3000/coffee')
        //     .then(response => response.json())
        //     .then(data => console.log(data))
    },[])

    //need a reference to get all the different kinds of coffee
    //lets give it the name coffees
    const coffees = ['Black','Latte','Espresso']


    
    return (
        <div className='post-modal'>
            <form action="">
                <h2>Create Post</h2>

                <div className='post-title-input-grp'>
                    <label htmlFor="title"></label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title"
                        placeholder='Title' 
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
                        />
                    </div>

                    <div>
                        <label htmlFor="coffee">Coffee</label>
                        <select name="coffee" id="coffee">Coffee
                            {coffees.map((coffee,idx) => <option value="coffee" key={idx}>{coffee}</option>)}
                        </select>    
                    </div>

                </div>

                <textarea 
                    name="text" 
                    id="text" 
                    cols="34" 
                    rows="15"
                    placeholder='Post Text'
                />
                <button className='btn-post' type="submit">submit</button>
            </form>
        </div>
    )
}


export default PostModal