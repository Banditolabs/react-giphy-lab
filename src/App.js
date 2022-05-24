
import { useState, useEffect } from "react";
import Gif from './components/Gif.jsx'
import Banner from './components/Banner.jsx'
import Button from './components/Button'
import './App.css'
import './styles.scss'


function App() {
  const API_KEY = "NhQomqQCkFuo5LQRob4zHeoxxCNyBpgG";
  const [gif, setGif] = useState(null);

  const getGif = async () => {
    // making api Call
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?apikey=${API_KEY}`
    );

    // converting the response to js object
    const data = await response.json();
    // updating the state to the object
    console.log(data);
    setGif(data);
  };
 

  // Will only repeat if any value in the array changes
  // useEffect(() => {
  //     getGif();
  // }, []);

  
if (gif) {
  return (
    <div className="App">
      <Banner className="banner" />
      <Gif src={gif.data.images.downsized_medium.url} />
      <Button onClick={getGif} />
    </div>
  );
}else {
    return  (
      <div className="App">
        <Button onClick={getGif} />
      </div>
    )
    

}

}

export default App;
