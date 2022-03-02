import React from "react";
import preloader from "../../../assets/imges/preloader.svg";


let Preloader=(props)=>{
  return < div style={{backgroundColor: 'red'}}>
            <img src={preloader}/>
        </div>
}
export default Preloader;