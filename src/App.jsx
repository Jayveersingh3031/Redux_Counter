import AddButton from "./Components/AddButton"
import RemoveButton from "./Components/RemoveButton"
import Profile from "./Components/Profile"

function App() {

  return (
    <div className="h-screen bg-slate-900 flex flex-col gap-4 justify-center items-center">
      <Profile/>
      <div className="flex gap-4 mt-10">
      <AddButton/>
      <RemoveButton/>
      </div>
    </div>
  )
}

export default App
