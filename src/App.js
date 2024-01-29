import logo from '/Users/marcusmiller/Desktop/Mentor/qr-code/src/image/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div classname="ctn-one">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className='ctn-two'>
          <h1>
          Improve your front-end skills by building projects
          </h1>
        </div>
        <div className="ctn-three">
          <p>
            Scan the QR code to visit Frontend Mentor
            and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
