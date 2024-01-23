import logo from '/Users/marcusmiller/Desktop/Mentor/qr-code/src/image/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>
         Imrove your front-end skills by building projects
        </h1>
        <p className="p">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
    </div>
  );
}

export default App;
