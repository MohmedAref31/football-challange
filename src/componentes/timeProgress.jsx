import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
// import { CircularProgressbarStyles } from './types';

import 'react-circular-progressbar/dist/styles.css';


export default function TimeProgress (props){

    const {current} = props
    
    return(
        <div style={{width:"100px", margin:"auto"}}>
        <CircularProgressbar
        value={current/30*100}
        text={`${current}s`}
        styles={buildStyles({
            textColor:"#fff",
            pathColor:'rgb(160 3 254)'
        }) }
      />
      </div>
    )
}