import Header from '../components/Header';
import Grid from '@mui/joy/Grid';

import ShopItems from '../json/shopItems.json';
import Ticket from "../components/Ticket.jsx";
import {useContext} from "react";
import Context from "../Context.js";

function PointShop() {
    const {user, setUser, setDialog} = useContext(Context);

    function buy(article) {
        if (article.price > user.points) {
            return setDialog(oldDialog => ({
                ...oldDialog,
                open: true,
                msg: "Dein Guthaben ist zu klein.",
                color: "danger"
            }));
        }

        setUser(oldUser => ({
            ...oldUser,
            points: oldUser.points - article.price,
            coupons: [...oldUser.coupons, article.id]
        }))
        setDialog(oldDialog => ({
            ...oldDialog,
            open: true,
            msg: "Artikel wurde erfolgreich gekauft.",
            color: "success"
        }));
    }


    return (
        <>
            <Header title="Punkte einlösen"/>
            <Grid container sx={{
                maxWidth: 700,
                margin: "auto",
            }}>
                {ShopItems.map((item, index) => {
                    return (
                        <Grid onClick={() => buy(item)} item="true" xs={12} md={6} key={index} marginTop={3}>
                            <Ticket pointScore={item.price} firstText={item.name} svgURL={item.svgURL}/>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    );
}

export default PointShop;
