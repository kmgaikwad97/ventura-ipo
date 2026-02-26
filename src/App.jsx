import { BrowserRouter, Routes, Route } from "react-router-dom";
import IPOList from "./pages/IPOList";
import IPODetails from "./pages/IPODetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IPOList />} />
        <Route path="/ipo/:id" element={<IPODetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;