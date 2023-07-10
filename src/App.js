import './App.css';
import {useState} from 'react'
import BoxForm from './components/BoxForm';
import Box from './components/Box';

function App() {

  // making the array of boxes
    const [boxes, setBoxes] = useState([])

  // keeping the older boxes and adding the new box
    const addBox = box => {
      setBoxes(currentBoxes => ([...currentBoxes, box]))
    }

    const flexy = {
      display: 'flex',
    }

  return (
    <div className="App">
      <BoxForm addFunction = {addBox}/>
      <div style={flexy}>
        {
          boxes.map((box, i) => {
            return (
              <Box color={box.color}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
