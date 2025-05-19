import Square from "./Square"
import style from "./style/small_board.module.css"
export default function SmallBoard({order}) {
    const size = 9
    const board = []
    for(let i=0; i<size; i++) {
        board.push(i+1)
    }
    return(
        <div className={style.container}>
            { board.map((square) => {
                return (
                    <Square keyValue={order*square} />
                )
            })}
        </div>
    )
}
