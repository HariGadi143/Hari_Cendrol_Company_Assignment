// Write your code here
import {useState} from 'react'
import ComponentB from '../ComponentB'
import './index.css'

const ComponentA = () => {
  const [cendol, increaseCount] = useState(0)
  const [color, changeColor] = useState(true)
  const onIncrementCount = () => {
    increaseCount(cendol + 10)
    changeColor(!color)
  }
  const buttonColor = color ? 'red' : 'blue'
  return (
    <div className="bg-container">
      <div className="count-card">
        <div className="rounded-card">
          <ComponentB value={cendol} />
          <p className="paragraph">Click to increase counter</p>
        </div>
      </div>
      <button
        type="button"
        className={`button ${buttonColor}`}
        onClick={onIncrementCount}
      >
        Change Color
      </button>
    </div>
  )
}
export default ComponentA
