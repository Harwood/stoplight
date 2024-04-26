import { useEffect, useState } from 'react';
import './style/circle.css'
import './style/color.css'
import './style/state.css'

function App() {
  const [activeColor, setActiveColor] = useState('')
  const [seconds, setSeconds] = useState(0)

  const Colors = {
    Red: 'red',
    Yellow: 'yellow',
    Green: 'green',
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => {
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
    }, seconds * 1000);
    return () => clearInterval(interval);
  }, [activeColor, seconds])

  const Light = () =>
    <div class="frame black">
      {
        Object.entries(Colors)
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
