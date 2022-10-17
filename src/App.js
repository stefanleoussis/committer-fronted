import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://commiter-project.herokuapp.com/users')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  });
  return (
    <div className="App">
      <p></p>
    </div>
  );
}

export default App;
