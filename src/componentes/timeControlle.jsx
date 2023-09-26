import { useEffect, useState } from "react";
import TimeProgress from "./timeProgress";
import audio from '../audio/failring.mp3'

export default function TimeControlle(){
    const [time, setTime] = useState(30)
    const [isRunning, setRunning] = useState(false);

    useEffect(()=>{
        if(isRunning && time > 0){
            var interval = setInterval(() => {
                setTime(time - 1)
            }, 1000);
        }
        if(time==0)
            runAudio()
        return ()=>clearInterval(interval)
    },[time,isRunning])
     
    const changeRunning = ()=>{
        setRunning(!isRunning)
    }
    const btnStyle ={
            width:"100px",
            background:"#ca1041",
            color:"#fff",
            padding:"5px",
            borderRadius:"5px"
    }
    const runAudio = ()=>{
        const fail = document.getElementById("fail")
        fail.play()
    }
    return(
        <>
        <div className="time-controller">
            <audio id="fail">
                <source src={audio} type="audio/mpeg" />
            </audio>
        <TimeProgress current={time}/>
        <div style={{
            display:'flex',
            justifyContent:"center",
            gap:"10px",
            margin:"10px 0"
        }}>
            <button style={btnStyle} onClick={()=>{
                setRunning(false)
                setTime(30)
            }}>اعاده</button>
            <button style={btnStyle} onClick={changeRunning}>{isRunning?"ايقاف":"بدا"}</button>
            
        </div>
        </div>

        </>
    )
}