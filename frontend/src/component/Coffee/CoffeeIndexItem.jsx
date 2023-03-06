import React from 'react'
import coffeemug from '../../assets/mug.svg'


const CoffeeIndexItem = ({name, year}) =>  {
    return (
        <div className='border'>
            <p>
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