import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [comics,setComics]=useState([]);
 
  async function getFotos() {
    const res=await axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=9d8862aaf56bc6badc3bace765ccfae4&hash=473ef8e34517e13cb8cea57664a1880d');
    setComics(res.data.data.results);

    
  }

  useEffect(()=>{
    getFotos();
  },[]);
  return (
    <div className="App">
   {comics.map(comic=>(
    <div>
      <h1>{comic.title}</h1>
      <p>{comic.modified}</p>
     
      <img src={comic.thumbnail.path+'.'+comic.thumbnail.extension} />
      </div>

   ))

   }
    </div>
  );

}

export default App;
