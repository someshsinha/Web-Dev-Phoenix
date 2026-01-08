import { languages } from "./langlist.js";
function LanguageButton(){
    return (
        <div className="languages"style={{display:"flex",gap:"6px"}}>
            {
                languages.map((lang)=>(
                    <span
                    key={lang.name}
                    style={{
                        backgroundColor:lang.backgroundColor,
                        color:lang.color
                    }}
                >{lang.name}</span>))
            }
        </div>
    )
}
export default LanguageButton;