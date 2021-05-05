import './App.css';
import './style.css';
import myImage from './imageInSrc.jpg';
import MyVideo from './MyVideo.mp4';

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red" >Amel Boughattas</h1>
        <br/>
        <img src={myImage} className="image" alt="imageSrc" />
        <br/>
        <img  src='./imageInPublic.jpg' className="imagepub"  alt="imagePub" />
      </div>
      <br/>
      <video  style={{width:'320px' , height:'240px' }} src={MyVideo} controls  ></video>
    </div>
  );
}

export default App;
