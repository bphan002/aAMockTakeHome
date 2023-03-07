import React, { useState } from 'react'
import axios from 'axios'
const CoffeeModal = () => {
    const [newCoffee, setNewCoffee] = useState({
        name: '',
        year: '',
        caffeine:'',
    })
    console.log(newCoffee)

    const handleChange = e => {
        const {name, value} = e.target
        setNewCoffee(prevState => ({...prevState, [name]:value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/coffee',newCoffee)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    console.log('coffee modal')
    return (
        <div className='coffee-modal border'>
            <h2>New Coffee</h2>
            <form onSubmit={(e) =>handleSubmit(e)}>
                <div className='input-group'>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        required
                        onChange={e=>handleChange(e)} 
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="year">Year</label>
                    <input
                        min='1500'
                        max="2023" 
                        type="number" 
                        name="year" 
                        id="year"
                        required 
                        onChange={e=>handleChange(e)} 
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="caffeine">Caffeine</label>
                    <input 
                        type="text" 
                        name="caffeine" 
                        id="caffeine"
                        required
                        onChange={e=>handleChange(e)} 
                    />
                </div>
                <div className='btn-format'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CoffeeModal