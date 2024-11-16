import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {editText, editObject} from './Redux/Slices/TestSlice'

function App() {
  const dispatcher = useDispatch()
  const enteredValue = useSelector(state => state.Test.name)
  const {age, adult} = useSelector(state => state.Test.obj)
  const [value, setValue] = useState(enteredValue || '')
  const [age1, setAge] = useState(age || 0)
  const [isAdult, setIsAdult] = useState(adult || false)

  const submitFunc = () => {
    console.log(value, enteredValue)
    dispatcher(editText(value))
    dispatcher(editObject({age: age1, adult: isAdult}))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
        <input type='number' value={age1} onChange={(e) => setAge(e.target.value)}/>
        <input type='checkbox' checked={isAdult} onChange={() => setIsAdult(!isAdult)}/>
        <button onClick={submitFunc}>Submit</button>
        <h3>{enteredValue} {age} {adult ? 'Adult' : ''}</h3>
      </header>
    </div>
  );
}

export default App;
