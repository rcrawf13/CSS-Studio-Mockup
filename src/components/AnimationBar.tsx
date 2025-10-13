
import "./animationbar.css"
import {useState } from "react"
import playIcon from "../assets/Add.png";


const AnimationBar = () => {
    const [frameCount,setFrameCount] = useState([])
    const [activeFrame,setActiveFrame] = useState();



    const increment = () => {
        const frameCountCopy = [...frameCount,frameCount];
        setFrameCount(frameCountCopy);

    }

 

    const updateActive = (index:number):void => {
        setActiveFrame(index);
    }



    return (
     <div className="animationBar">
        <div className="actionBar">
                    <button></button>
        </div>
        <div className="frameBar">

            
 
            {
            frameCount.map((item,index:number) => (
                <div 
                onClick={()=>updateActive(index)}
                style={{backgroundColor:index === activeFrame?'#2A2139':''}} 
                id={`frame-${index}`} 
                className="frame">{index}</div>
            ))
            }

        <div onClick={increment} className="frame" id="plus">
            
                <img src={playIcon} alt="" />
            </div>
        </div>
     </div>
  )
}

export default AnimationBar