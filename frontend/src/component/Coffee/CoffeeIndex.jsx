import React, { useState, useEffect, useRef } from 'react'
import coffees from '../../SeedData/coffees.json'
import CoffeeIndexItem from './CoffeeIndexItem'
import CoffeeModal from './CoffeeModal'
import axios from 'axios'

const CoffeeIndex = () => {
    const [showCoffeeModal, setShowCoffeeModal] = useState(false)
    const [coffees, setCoffees] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleClick = () => {
        //opens modal
        setShowCoffeeModal(true)
    }

    const coffeeModalRef = useRef()

    useEffect(() => {
        document.addEventListener("mousedown",(e) => {
            if (!coffeeModalRef.current.contains(e.target)) {
                setShowCoffeeModal(false)
            }
        })
            const fetchCoffees = async () => {
                    const result = await axios(`http://localhost:5000/coffee`)
                    setCoffees(result.data)
                    setLoading(false)
            }
            fetchCoffees()
    })

    return (
        <aside>
            <div ref={coffeeModalRef} className='coffee-modal'>
                <div className='coffee-header'>
                    <h2>Coffees</h2>
                    <button onClick={handleClick} >New Coffee</button>
                    {showCoffeeModal && <CoffeeModal/>}
                </div>
                {coffees?.map((coffee,idx) => <CoffeeIndexItem key={idx} {...coffee} />)}
            </div>
        </aside>
    )
}

export default CoffeeIndex