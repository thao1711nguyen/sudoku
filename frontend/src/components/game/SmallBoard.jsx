import Square from "./Square"
import style from "./style/small_board.module.css"
export default function SmallBoard({order, bigBoard, unit}) {
    const size = 9
    const board = new Array(size).fill(null)
    function isUnique2(arr, row, column) {
        const rowArray = arr[row]
        const value = arr[row][column]
        for(let i=0; i<rowArray.length; i++) {
            if ((rowArray[i] === value) && (i !== column)) {
                return false
            }
        }
        for(let i=0; i<arr.length; i++) {
            if ((arr[i][column] === value) && (i !== row)) {
                return false
            }
        }
        return true
    }
    function isUnique(arr, index) {
        index = Number(index)
        const value = arr[index]
        for(let i=0; i < arr.length; i++) {
            if((arr[i] === value) && (index !== i)) {
                return false
            }
        }
        return true
    }
    function isValid(e) {
        const index = Number(e.target.dataset.order)
        const row = (Math.floor((order-1) / unit ))*unit + (Math.floor(index  / unit))
        const column = (index % unit) + ((order-1) % unit)*unit
        if (isUnique(board, index)) {
            bigBoard[row][column] = e.target.textContent
            if (isUnique2(bigBoard, row, column)) {
                e.target.classList.remove(style.error)
            } else {
                e.target.classList.add(style.error)
                bigBoard[row][column] = null
            }
        } else {
            e.target.classList.add(style.error)
            bigBoard[row][column] = null
        }

        
    }
    return(
        <div className={style.container} onInput={isValid} data-big-order={order}>
            { board.map((square, index) => {
                return (
                    <Square key={order*10 + (index+1)} board={board} order={index}/>
                )

            })}
        </div>
    )
}
