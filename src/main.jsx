import ReactDOM from "react-dom/client";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Map from "./pages/Map.jsx";
import PointShop from "./pages/PointShop.jsx";
import Games from "./pages/Games.jsx";
import 'semantic-ui-css/semantic.min.css'
import NotFound from "./pages/NotFound.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/map" element={<Map/>}/>
                <Route path="/points" element={<PointShop/>}/>
                <Route path="/games" element={<Games/>}/>

                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/404" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);