import { Route, Routes } from "react-router-dom";
import Extensions from "./components/Extensions";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/extensions" element={<Extensions />} />
      </Routes>
    </>
  );
}

export default App;
