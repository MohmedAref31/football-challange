import { Link } from "react-router-dom";
import "./btn.css";

export default function SectionBtn(props) {
  return (
    <>
      <Link to={props.goto} className="main-btn"  sec = {props.sec}>
        {props.text}
      </Link>
    </>
  );
}
