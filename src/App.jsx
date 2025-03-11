import { useState } from 'react'
import './App.css'
import SEAT_DATA from './data'
import Result from './Result'

function App() {
  const [name, setName] = useState('')
  const [result, setResult] = useState(null)
  const [searched, setSearched] = useState(false)

  const searchSeat = () => {
    const seat = SEAT_DATA[name]
    console.log(seat)
    if (!seat) {
      alert('未找到该嘉宾的座次')
      return
    }
    // 组件通信传递
    setResult({ name, seat })
    setSearched(true)
  }
  if (searched) {
    return (
      <>
        <Result result={result} />
        <button onClick={() => setSearched(false)}>返回</button>
      </>
    )
  } else {
    return (
      <>
        <h1>座次查询</h1>
        <input type="text" id="nameInput" placeholder="请输入姓名" onChange={e => setName(e.target.value)} />
        <button onClick={searchSeat}>查询</button>
      </>
    )
  }
}

export default App
