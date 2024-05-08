import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Map from "./pages/Map.jsx";
import PointShop from "./pages/PointShop.jsx";
import 'semantic-ui-css/semantic.min.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/map" element={<Map />} />
        <Route path="/points" element={<PointShop />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);