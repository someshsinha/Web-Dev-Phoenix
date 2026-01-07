import Header from "./Components/Header.jsx";
import Farewell from "./Components/Status/Farewell.jsx"
import Loose from "./Components/Status/Loose.jsx"
import Win from "./Components/Status/Win.jsx"
function App() {
  return (
    <>
      <Header></Header>
      {/* <Farewell language="HTML & CSS"></Farewell> */}
      <Loose></Loose>
    </>
  );
}
export default App;
