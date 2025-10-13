
import "./animationbar.css"
import {useState, useRef} from "react"
import playIcon from "../assets/Add.png";


const AnimationBar = () => {
    const [frameCount,setFrameCount] = useState([])
    const [activeFrame,setActiveFrame] = useState();
    const scrollRef = useRef(null)

    const increment = () => {
        const frameCountCopy = [...frameCount,frameCount];
        setFrameCount(frameCountCopy);

    }

 
    //For determining which frame is selected
    const updateActive = (index:number):void => {
        setActiveFrame(index);
    }

    // Used for Overflow Scrolling in Frame Bar
    const horizontalScroll = (e) => {
        // Does A truthy check on useRef Hook to see if there is an element assigned to it
        if(scrollRef.current) {
            //Taking the current Horizontal Pos == 0, 
            //adding the vertical scroll movement to horizontal pos += vertical movement
            scrollRef.current.scrollLeft += e.deltaY;
        }
    }


    return (
     <div className="animationBar">
        <div className="actionBar">
                    <button></button>
        </div>
        <div ref={scrollRef} onWheel={(e)=>horizontalScroll(e)} className="frameBar">

            
 
            {
            frameCount.map((item,index:number) => (
                <div 
                onClick={()=>updateActive(index)}
                style={{backgroundColor:index === activeFrame?'#2A2139':''}} 
                key={`frame-${index}`} 
                className="frame">{index}</div>
            ))
            }

        <div onClick={increment} className="frame" id="plus"></div>
        </div>
     </div>
  )
}

export default AnimationBar