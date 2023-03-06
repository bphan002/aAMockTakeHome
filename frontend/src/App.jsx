import './App.css'
import CoffeeIndex from './component/Coffee/CoffeeIndex'
import CoffeeModal from './component/Coffee/CoffeeModal'
import PostHeader from './component/Posts/PostHeader'
import PostIndex from './component/Posts/PostIndex'

function App() {
  return (
    <div className='two-column'>
      <div className='left-column'>
        <PostHeader/>
        <PostIndex/>
      </div>
      <div className='right-column'>
        <CoffeeIndex/>
      </div>
    </div>
  )
}

export default App
