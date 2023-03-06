import React, { useState } from 'react'
const CoffeeModal = () => {
    const [coffee, setCoffee] = useState({
        name: '',
        year: '',
        caffeine:'',
    })
    console.log(coffee)

    const handleChange = e => {
        const {name, value} = e.target
        setCoffee(prevState => ({...prevState, [name]:value}))
        console.log(coffee)
    }

    return (
        <div className='coffee-modal border'>
            <h2>New Coffee</h2>
            <form action="">
                <div className='input-group'>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        onChange={e=>handleChange(e)} 
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="year">Year</label>
                    <input
                        min='1500' 
                        type="number" 
                        name="year" 
                        id="year" 
                        onChange={e=>handleChange(e)} 
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="caffeine">Caffeine</label>
                    <input 
                        type="text" 
                        name="caffeine" 
                        id="caffeine"
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