import { useEffect, useState } from 'react';
import './style/circle.css'
import './style/color.css'
import './style/state.css'
import './configs'

function App() {
  const [activeColor, setActiveColor] = useState('') // TODO: Convert to []
  const [seconds, setSeconds] = useState(0)

  const Colors = { // TODO: This ia replaced by configs.X.colors
    Red: 'red',
    Yellow: 'yellow',
    Green: 'green',
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => {
        // TODO: Biggest change would be to this loop.
        // Replace with iterate over index of configs.X.squence and setActiveColor() to array colors of index + 1 or 0 if at end of sequence
        // Same replacement of return the duration instead of hard coded values
        switch (activeColor) {
          case 'green':
            setActiveColor(_ => 'yellow')
            return 1
          case 'yellow':
            setActiveColor(_ => 'red')
            return 2
          case 'red':
          default:
            setActiveColor(_ => 'green')
            return 5
        }})
    }, seconds * 1000); // TODO: Given  `duration` values are already in thousands, this changes to just the returned value, no multiplication
    return () => clearInterval(interval);
  }, [activeColor, seconds])

  const Light = () =>
    <div class="frame black">
      {
        // TODO: Convert to enumerate configs.X.colors based on `position`
        Object.entries(Colors)
        // TODO: Convert ternary to `if configs.X.squence[Y].contains() light based on color of this position being
        .map( ([_, value]) => <div class={`circle ${value} ${value === activeColor ? 'on' : 'off'}`} /> )
      }
      </div>

      return (
        <div className="App">
        <Light />
        </div>
      );
}

export default App;
