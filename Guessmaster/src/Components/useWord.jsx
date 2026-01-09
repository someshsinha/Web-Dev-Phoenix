import {useState} from "react";
function UserWord(props){
    return (
        <div className="userword">
            {props.word.map((letter,index)=>(
                <span key={index}>{letter.toUpperCase()}</span>
            ))}
        </div>
    )
}
export default UserWord;