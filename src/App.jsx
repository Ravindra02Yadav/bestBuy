import { useState } from 'react'
import Banner from './components/Banner'
import BigBanner from './components/BigBanner'
import NavBar from './components/NavBar'
import Timer1 from './components/Timer1'
import Viwed from './components/Viwed'
import DealsofDay from './pages/DealsofDay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     {/* <NavBar/>
     <Banner/>
     <Viwed />
     <BigBanner/> */}
     <DealsofDay />
    </div>
  )
}

export default App
