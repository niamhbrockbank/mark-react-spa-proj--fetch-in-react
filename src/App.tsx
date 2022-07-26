import { useState } from "react";

interface DogPhotos {
  message: string;
  status: string
}

function App() {
  const [dog, setDog] = useState<DogPhotos>();
  const [prevDogs, addToDogHistory] = useState<(DogPhotos[])>([]);

  const handleGetDog = () => {
    // console.log(prevDogs)
    
    if (typeof dog !==  'undefined'){
      console.log(dog.message)
      addToDogHistory((prevDogs) => [...prevDogs, dog]); 
    }
       
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((jsonBody : DogPhotos) => setDog(jsonBody));
  };

  if (dog) {  
  return (
      <div>
        <h1>DOGS!</h1>
          <img src={dog.message} alt='dog'/>
        <hr />
        <button onClick={handleGetDog}>Get another dog</button>
        <p>History : {prevDogs}</p>
      </div>
    );
  } else {return (
  <>
  <h1>DOGS!</h1>
  <button onClick={handleGetDog}>
    Get your first dog photo
  </button>
  </>
  )}
}

export default App;




