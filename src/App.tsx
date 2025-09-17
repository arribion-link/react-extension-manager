import { Route, Routes } from "react-router-dom";
import Extensions from "./components/Extensions";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Extensions />} />
      </Routes>
    </>
  );
}

export default App;
