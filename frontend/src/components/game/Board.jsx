import SmallBoard from "./SmallBoard"
import style from "./style/board.module.css"
export default function Board() {
    const size=9
    const board = new Array(size).fill(null).map((item) => new Array(size).fill(null))
    const unit = 3
    
    return(
        <div className={style.container} >
            { board.map((item, index) => {
                return (
                    <SmallBoard order={index+1} key={index} bigBoard={board} unit={unit} />
                ) 
            })}
        </div>
    )
}