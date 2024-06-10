import ReactDOM from "react-dom/client";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Map from "./pages/Map.jsx";
import PointShop from "./pages/PointShop.jsx";
import Games from "./pages/Games.jsx";
import Login from "./pages/auth/Login.jsx";
import Registration from "./pages/auth/Registration.jsx";
import NotAuthScreen from './pages/auth/NotAuth.jsx'
import 'semantic-ui-css/semantic.min.css'
import NotFound from "./pages/NotFound.jsx";
import Context from './Context.js';
import {useState} from "react";
import Profile from "./pages/auth/profile.jsx";
import Game from "./pages/Game.jsx";
import {Snackbar, ThemeProvider} from "@mui/joy";
import theme from "./ThemeProvider.js";


export default function App() {
    const [user, setUser] = useState(null);
    const [dialog, setDialog] = useState({
        open: false,
        msg: "Keine Nachricht verfügbar",
        color: "success"
    });

    const PrivateRoute = (props) => {
        const a = props.type === "public"
        if ((user && !a) || (!user && a)) {
            return (props.element)
        }
        return <Navigate to="/notauth"/>
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Context.Provider value={{user, setUser, setDialog}}>
                        <Routes>
                            <Route path="/" element={<Index/>}/>
                            <Route path="/map" element={<Map/>}/>
                            <Route path="/games" element={<Games/>}/>
                            <Route path="/notauth" element={<NotAuthScreen/>}/>

                            <Route path="/points" element={
                                <PrivateRoute element={<PointShop/>} type="private"/>}
                            />

                            <Route path="/auth/login" element={
                                <PrivateRoute element={<Login/>} type="public"/>}
                            />
                            <Route path="/auth/registration" element={
                                <PrivateRoute element={<Registration/>} type="public"/>}
                            />
                            <Route path="/auth/profile" element={
                                <PrivateRoute element={<Profile/>} type="private"/>}
                            />
                            <Route path="/game/:id" element={
                                <PrivateRoute element={<Game/>} type="private"/>}
                            />

                            <Route path="*" element={<Navigate to="/404"/>}/>
                            <Route path="/404" element={<NotFound/>}/>
                        </Routes>
                    </Context.Provider>
                </BrowserRouter>
                <Snackbar
                    autoHideDuration={4000}
                    anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                    open={dialog.open}
                    color={dialog.color}
                    onClose={(event, reason) => {
                        if (reason === 'clickaway') {
                            return;
                        }
                        setDialog(oldDialog => ({
                            ...oldDialog,
                            open: false
                        }));
                    }}
                >
                    {dialog.msg}
                </Snackbar>
            </ThemeProvider>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);