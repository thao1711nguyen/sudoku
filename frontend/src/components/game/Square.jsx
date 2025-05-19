import { useState } from "react"
import style from "./style/square.module.css"
export default function Square({keyValue}) {
    const [number, setNumber] = useState(0)
    function isValid(e) {
        const content = e.target.textContent.trim()
        if (/^[1-9]$/.test(content)) {
            e.target.classList.remove(style.error);
            
        } else {
            e.target.classList.add(style.error)
        }
    }
    return(
        <div className={style.child} contentEditable="true" onBlur={isValid} key={keyValue} onChange={(e) => setNumber(e.target.textContent)}>
        </div>
    )
}