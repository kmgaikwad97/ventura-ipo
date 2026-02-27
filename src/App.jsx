import { BrowserRouter, Routes, Route } from "react-router-dom";
import IPOList from "./pages/IPOList";
import IPODetails from "./pages/IPODetails";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IPOList />} />
        <Route path="/ipo/:id" element={<IPODetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
