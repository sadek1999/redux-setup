
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/fetures/counterSlice'

function App() {
  const count=useSelector((state)=>state.counter.value)
  
const dispatch=useDispatch()
  return (
    <>
     
      <h1>Counter with Redux</h1>
     <h3>{count}</h3>
      <button onClick={()=>{dispatch(increment())}}>increase</button>
      <button onClick={()=>{dispatch(decrement())}}>decrease</button>
    </>
  )
}

export default App
