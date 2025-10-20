import "./toolbar.css"
import { useState } from "react"
const ShapeBar = () => {

    const [currentTool, setCurrentTool] = useState("");
    // TODO
    // Use onClick event to detect which tool is selected
    // Update State on toolbar 
    // Probably pass state to artboard 

    
    const ChangeCurrentTool = (toolName:string) => {
        setCurrentTool(toolName);        
    } 

    return (
        <div className="toolbar-Container">
            <div style={{filter:currentTool === "square"?"brightness(50%)":""}} onClick={()=>{ChangeCurrentTool("square")}} className="square"></div>
            <div style={{filter:currentTool === "circle"?"brightness(50%)":""}} onClick={()=>{ChangeCurrentTool("circle")}} className="circle"></div>
            <div style={{filter:currentTool === "triangle"?"brightness(50%)":""}} onClick={()=>{ChangeCurrentTool("triangle")}} className="triangle"></div>
        </div>
    )
}


export default ShapeBar