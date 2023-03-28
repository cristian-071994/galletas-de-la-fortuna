import { useState } from "react";
import "./App.css";
import ContainerInfo from "./components/ContainerInfo";
import quotes from "./db/quotes.json";

/* array con diferentes propiedades de app.css que son imagenes de fondo */

const images = ["image1", "image2", "image3", "image4"]

function App() {

  /* funcion que recibe un arreglo y devuelve una posicion (indice) del mismo aleatoriamente */

  const getRandomItem = (elementArray) => {
    const randomIndex = Math.floor(Math.random() * elementArray.length);
    return elementArray[randomIndex];
  };

  /* estado de las diferentes citas */

  const [quote, setQuote] = useState(getRandomItem(quotes));
  const [image, setImage] = useState(getRandomItem(images))

  const handleNewQuote = () => {
    setQuote(getRandomItem(quotes));
    setImage(getRandomItem(images));
  }

  return (
    <div className={`App ${image}`}>
      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote}/>
      
    </div>
  );
}

export default App;
