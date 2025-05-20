import SmallBoard from "./SmallBoard"
import style from "./style/board.module.css"
export default function Board() {
    const size=9
    const board=[]
    for(let i=0; i<size; i++) {
        board.push(i)
    }
    return(
        <div className={style.container}>
            { board.map((item) => {
                return (
                    <SmallBoard order={item+1} key={item} />
                ) 
            })}
        </div>
    )
}