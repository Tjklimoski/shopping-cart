import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Nav from "./components/Nav"
import { ShoppingCartProvider } from "./context/ShoppingCartProvider"

function App() {

  return (
    <ShoppingCartProvider>
      <Nav />
      <div className="page-content-wrapper">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </ ShoppingCartProvider>
    )
}

export default App
