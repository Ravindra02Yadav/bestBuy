import { useState } from 'react'
import Banner from './components/Banner'
import BigBanner from './components/BigBanner'
import NavBar from './components/NavBar'
import Viwed from './components/Viwed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <NavBar/>
     <Banner/>
     <Viwed />
     <BigBanner/>
    </div>
  )
}

export default App
