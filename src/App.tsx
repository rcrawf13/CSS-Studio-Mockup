import AnimationBar from "./components/AnimationBar"
import CodePen from "./components/codepen/CodePen"
import ArtBoard from "./components/artboard/ArtBoard"
import ToolBar from "./components/toolbar/ToolBar"
function App() {

  return (
    <>
    <div className="grid">
      <div className="columns">
        
        <CodePen/>
        <ArtBoard/>
        <ToolBar/>
      </div>
        <AnimationBar/>
    </div>
     
    
    </>
  )
}

export default App
