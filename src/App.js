import './App.css';
import Profile from './Components/Profile';
import DinamicWindow from './Components/DinamicWindow';
import Footer from './Components/FooterButton';


function App() {
  return (
    <div className="App">
      <div className='body-container'>
        <Profile />
        <DinamicWindow />
      </div>
      <Footer />
    </div>
  );
}

export default App;
