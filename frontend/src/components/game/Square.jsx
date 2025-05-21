import style from "./style/square.module.css"
export default function Square({board, order}) {

    function checkAndWrite(e) {
        const content = e.target.textContent
        const index = e.target.dataset.order
        if (isValid(content)) {
            e.target.classList.remove(style.error)
            
            board[index] = content
        } else {
            e.target.classList.add(style.error)
            board[index] = null
        }
    }
    function isValid(content) {
        return (/^[1-9]$/).test(content.trim())
        
    }
    return(
        <div className={style.child} contentEditable="true" onInput={checkAndWrite} data-order={order}>
        </div>    
    )
}