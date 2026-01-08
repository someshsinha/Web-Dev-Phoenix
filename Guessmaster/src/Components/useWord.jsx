import {useState} from "react";
function UserWord(){
   const [word,setWord]=useState("react");
    const letters=word.split("");
    return (
        <div className="userword">
            {letters.map((letter,index)=>(
                <span key={index}>{letter.toUpperCase()}</span>
            ))}
        </div>
    )
}
export default UserWord;