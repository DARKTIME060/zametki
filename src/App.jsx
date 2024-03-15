import AddNote from "./components/AddNote"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import ContextProvider from "./context/Context"

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Notes />
      <AddNote />
    </ContextProvider>
  )
}

export default App