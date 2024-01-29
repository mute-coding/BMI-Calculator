import React, {useState} from 'react';
import './index.css';

function App() {
//state
const {height, setHeight} = useState(0)
const {weight, setWeight} = useState(0)

  return (
    <div className="App">
      <div className='container'>
        <h2 className='center'>BMI Calculator </h2>
        <form>
          <div>
            <label>height (cm)</label>
            <input value={height} />
          </div>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} />
          </div>
          <div>
            <button className='btn' type='submit'>計算</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
