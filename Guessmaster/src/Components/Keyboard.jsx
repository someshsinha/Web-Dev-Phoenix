const letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Keyboard(props) {
  console.log("Keyboard component rendered");
  return (
    <div className="keyboard">
      {letter.split("").map((char) => (
        <button key={char} className="key" onClick={()=>props.onGuess(char)}>
          {char}
        </button>
      ))}  
    </div>
  )
}
export default Keyboard;