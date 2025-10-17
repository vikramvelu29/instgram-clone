import Content from "./Content"
import Sidebar from "./Sidebar"
import Suggestion from "./Suggestion"


function App() {
  return (
   <div className="d-flex vh-100 ">
    <div className="w-20"><Sidebar></Sidebar></div>
    <div className="w-50"><Content></Content></div>
    <div className="w-30"><Suggestion></Suggestion></div>

   </div>
  )
}

export default App