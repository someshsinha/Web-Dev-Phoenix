import Header from "./Components/Header.jsx";
import Farewell from "./Components/Status/Farewell.jsx"
import Loose from "./Components/Status/Loose.jsx"
import Win from "./Components/Status/Win.jsx"
import LanguageButton from "./Components/langbut.jsx"
import UserWord from "./Components/useWord.jsx";
function App() {
  return (
    <>
      <Header></Header>
      {/* <Farewell language="HTML & CSS"></Farewell> */}
      <Loose></Loose>
      <LanguageButton></LanguageButton>
      <UserWord>  </UserWord>
    </>
  );
}
export default App;
