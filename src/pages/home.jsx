import SectionBtn from "../componentes/sectionButton/sectionBtn";


export default function Home(){
    return(
        <>
        <div style={{
            display:'flex',
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100dvh",
            gap:"20px",
            width:"400px",
            maxWidth:"100%",
            margin:"auto"
        }}>
            <SectionBtn goto={"/pass-challange"} text={"كلمة السر"} sec={"pass"}/>
            <SectionBtn goto={"/add-player"} text={"اضافة لاعبين"} sec={"add"}/>
            
        </div>
        </>
    )
}