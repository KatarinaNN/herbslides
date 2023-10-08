import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [herb, setHerb] = useState(0);
  const {id, image, name, description} = data[herb];

  const previousHerb = () =>{
    setHerb((herb =>{
      herb--;
      if(herb<0) {
        herb =data.length-1;
      }
      return herb;
    }))
  }
  const nextHerb = () =>{
    setHerb((herb =>{
      herb++;
      if(herb>data.length-1){
        herb=0;
      }
      return herb;
    }))
  }
  return (<div>
            <div className="container">
          <h1>{id}. {name}</h1>
        </div>
          <div className="container">
          <img src={image} alt="herb" width="500px" />
        </div> 
        <div className="container">
          <p>{description}</p>
        </div>
        <div className="container btn">
          <button onClick={previousHerb}>previous</button>
          <button onClick={nextHerb}>next</button>
        </div>
  </div>
  );
}

export default App;
