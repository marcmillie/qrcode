import logo from '/Users/marcusmiller/Desktop/Mentor/qr-code/src/image/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>
         Imrove your front-end skills by building projects
        </h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </header>
    </div>
  );
}

export default App;
