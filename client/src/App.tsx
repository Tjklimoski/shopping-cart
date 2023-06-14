import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Nav from "./components/Nav"

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
    )
}

export default App
