import { useContext } from "react"
import { Index } from "./challange"




export default function ChangePlayer(props){
    const {index,setIndex} = useContext(Index) 
    console.log(index)
    const {playersnum} = props

    const changeIndex = ()=>{
        const num = Math.floor(Math.random() * playersnum)
        setIndex(num)
    }
    return(
        <>
        <div>
            <button
                style={{
                    width:"200px",
                    margin:" 10px auto",
                    display:"block",
                    padding:"5px",
                    borderRadius:"10px",
                    backgroundColor:"rgb(22 137 47)",
                    color:"#fff",
                    fontSize:"18px"
                }}
                onClick={changeIndex}
            >
                تغيير اللاعب
            </button>
        </div>
        </>
    )
}