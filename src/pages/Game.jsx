import Header from "../components/Header.jsx";
import {Link, useParams} from 'react-router-dom';

import games from '../json/games.json';
import {Button} from "@mui/joy";
import {useContext, useState} from "react";
import Typography from "@mui/joy/Typography";
import Context from "../Context.js";
import Box from "@mui/joy/Box";

const Game = () => {
    const { user, setUser, setDialog } = useContext(Context);

    const { id } = useParams();
    const { name, imageURL } = games.filter(game => game.id === Number(id))[0]
    const [ output, setOutput ] = useState("");

    function startGame(){
        const randomPoint =  Math.floor(Math.random() * 100);

        setUser(oldUser => ({
            ...oldUser,
            points: oldUser.points + randomPoint
        }));

        setDialog(oldDialog => ({
            ...oldDialog,
            open: true,
            msg: `Du hast ${randomPoint} gewonnen.`,
            color: "success"
        }));
    }

    if(!name){
        return(
            <>
                <Header title="Spiel nicht gefunden"/>
                <Link to="/games">Zurück</Link>
            </>
        )
    }

    return(
        <>
            <Header title={name}/>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <img src={imageURL} style={{
                    width: "80vw",
                }}></img>
                <Button onClick={startGame} sx={{
                    marginTop: "2rem"
                }}>Game spielen</Button>
            </Box>
        </>
    )
}

export default Game;