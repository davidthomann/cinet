import ReactDOM from "react-dom/client";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Map from "./pages/Map.jsx";
import PointShop from "./pages/PointShop.jsx";
import Games from "./pages/Games.jsx";
import Login from "./pages/auth/Login.jsx";
import Registration from "./pages/auth/Registration.jsx";
import 'semantic-ui-css/semantic.min.css'
import NotFound from "./pages/NotFound.jsx";
import Context from './Context.js';
import {useState} from "react";

export default function App() {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Context.Provider value={{user, setUser}}>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/map" element={<Map/>}/>
                    <Route path="/points" element={<PointShop/>}/>
                    <Route path="/games" element={<Games/>}/>

                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/auth/registration" element={<Registration/>}/>

                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route path="/404" element={<NotFound />} />
                </Routes>
            </Context.Provider>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);