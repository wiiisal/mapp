import logo from './logo.svg';
import './App.css';
import {GoogleMap, Marker,useLoadScript} from '@react-google-maps/api';


function App() {
  const isLoades=useLoadScript({googleMapsApiKey:'API KEY'})
 
  if(!isLoades)return <div> Loadiiiiing...</div>
  return (
    <div className="App">
      <h1>this is an imbed google map from wissal :  </h1>
    <iframe
	src="https://www.google.com/maps?q=48.127660,11.575380&z=9&output=embed"
    width="800"
    height="600"
    allowfullscreen
></iframe>
    </div>
  );
}


export default App;
