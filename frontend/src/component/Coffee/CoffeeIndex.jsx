import React, { useState, useEffect } from 'react'
import coffees from '../../SeedData/coffees.json'
import CoffeeIndexItem from './CoffeeIndexItem'
import CoffeeModal from './CoffeeModal'

const CoffeeIndex = () => {
    const [showCoffeeModal, setShowCoffeeModal] = useState(false)

    const handleClick = () => {
        //opens modal
        setShowCoffeeModal(true)
    }

    useEffect(() => {

    },[])

    return (
        <aside>
            <div className='coffee-header'>
                <h2>Coffees</h2>
                <button onClick={handleClick} >New Coffee</button>
                {showCoffeeModal && <CoffeeModal/>}
            </div>
            {coffees.map(coffee => <CoffeeIndexItem {...coffee} />)}
        </aside>
    )
}

export default CoffeeIndex