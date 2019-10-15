import React, {useState, Suspense} from 'react';
import './App.css';

const Tilt = React.lazy(() => import('./lessons/lazy/box'))

function useToggle(init = false) {
  const [on, setOn] = useState(init)
  const toggle = () => setOn(!on)
  return [on, toggle]
}

function App() {
  const [showTilt, toggleTilt] = useToggle()
  return (
    <div className="App">
      <label>
        show tilt
        <input type="checkbox" checked={showTilt} onChange={toggleTilt} />
      </label>
      <div style={{height: 150, width: 200}} className="totally-centered">
        {showTilt && ((
          <Suspense fallback={<div>loading...</div>}>
            <div style={{backgroundColor: 'black', padding: 50}} className="totally-centered">
                <Tilt>
                    <div className="totally-centered">vanilla-tilt.js</div>
                </Tilt>
            </div>
          </Suspense>
        )
          )
        }
      </div>
    </div>
  );
}

export default App;
