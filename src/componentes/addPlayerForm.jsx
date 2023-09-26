import { useState } from "react";
import defaulImage from "../images/default.png"

export default function AddPlayerForm() {
    const [inputs,setInputs] = useState({name:"",image:""})

  const handelSubmit = async () => {};
  return (
    <form onSubmit={handelSubmit} className="add-player">
      <div style={{ textAlign: "right" }}>
        <label htmlFor="playerName">اسم اللاعب</label>
        <br />
        <input type="text" onChange={(e)=>{
            setInputs({...inputs,name:e.target.value})
        }}
        />
      </div>
      <div style={{ textAlign: "right" }}>
        <label htmlFor="playerName">صورة اللاعب</label>
        <br />
        <input type="text" lang="en" dir="ltr"
        onChange={(e)=>{
            setInputs({...inputs,image:e.target.value})
        }}
        />
      </div>
      <div className="formImage">
        <img src={`${inputs.image?inputs.image:defaulImage}`} alt="" />
      </div>
      <input type="submit" value="ارسال" />
    </form>
  );
}
