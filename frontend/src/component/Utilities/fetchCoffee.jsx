import axios from 'axios'

const fetchCoffees = async () => {
        const result = await axios(`http://localhost:5000/coffee`)
}

export default fetchCoffees