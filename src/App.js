import './App.css';
import Profile from './Components/Profile';
import DinamicWindow from './Components/DinamicWindow';


function App() {
  return (
    <div className="App">
      <div className='body-container'>
        <Profile />
        <DinamicWindow />
      </div>
      <div className='footer-container'>

      </div>
      
    </div>
  );
}

export default App;
