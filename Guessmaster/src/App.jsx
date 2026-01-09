import Header from "./Components/Header.jsx";
import Farewell from "./Components/Status/Farewell.jsx"
import Loose from "./Components/Status/Loose.jsx"
import Win from "./Components/Status/Win.jsx"
import LanguageButton from "./Components/langbut.jsx"
import UserWord from "./Components/useWord.jsx";
import Keyboard from "./Components/Keyboard.jsx"; 
import {useState} from "react";
function App() {
  const [wordGuessed,setWordGuessed]=useState([]);
  function handleGuess(char)
  {
    if(!wordGuessed.includes(char))setWordGuessed((prev)=>[...prev,char]);
  }
  return (
    <>
      <Header></Header>
      {/* <Farewell language="HTML & CSS"></Farewell> */}
      <Loose></Loose>
      <LanguageButton></LanguageButton>
      <UserWord word={wordGuessed}></UserWord>
      <Keyboard onGuess={handleGuess}></Keyboard>
      <button className="NewGame">New Game</button>
    </>
  );
}
export default App;
