import React from 'react'
import coffeemug from '../../assets/mug.svg'
import axios from 'axios'

const deleteCoffee = async (e) => {
    const {id} = e.target
    console.log('id',id)
    const response = await axios.delete(`http://localhost:5000/coffee/${id}`)

    if (response.statusCode === 200) {
        console.log(response)
    } else {
        console.error(response)
    }
}
console.log('cofee index item')

const CoffeeIndexItem = ({name, _id, year}) =>  {
    return (
        <div  className='border'>
            <p id={_id} onClick={(e)=>deleteCoffee(e)}>
                <img 
                    style={{height:20}} 
                    src={coffeemug} 
                    alt="coffemug"
                />
                {` ${name} - ${year}`}
            </p>
        </div>
    )
}

export default CoffeeIndexItem