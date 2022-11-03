import React, {useState, useEffect} from 'react';
import './App.css';
import Result from './Components/Result.jsx'

function App() {

  const [name, setName] = useState('')
  const [darkMode, setDarkMode] = useState(false);
  const [showCount, setShowCount] = useState(false);




  //****** The code block from line 18 to line 37 is
  // triggering an error. See if you can figure out how
  // to fix it by looking at the error in the console.

  // The code below creates a timer that triggers the
  // doneTyping function 700 milliseconds after the user has
  // finished typing
  let typingTimer
  let doneTypingInterval = 700
  let inputField = document.getElementById('input')

  // Start the countdown when keyup event is detected
  inputField.addEventListener('keyup', () => {
      clearTimeout(typingTimer);
      if (inputField.value) {
          typingTimer = setTimeout(doneTyping, doneTypingInterval);
      }
  });

  // User hasn't typed in 700ms and are finished typing, so
  // update the 'name' state variable accordingly
  function doneTyping () {
    setName(inputField.value)
  }




  return (
    <main>
      <div className="grid">
        <h2 className="row1">Please type a name in the field below</h2>
        <input placeholder="First name" className="row2 inp" id="input"/>
        <div className="side">
          <h4>Options</h4>


          {/* Use event listeners or the onClick attribute */}
          {/* to make these buttons toggle darkMode or showCount */}
          {/* when they are pressed */}
          <button className="btn">Dark mode</button>
          <button className="btn">Show count</button>

        </div>
      </div>

      {/* Add props to the Result component below */}
      <Result />

    </main>
  );
}

export default App;