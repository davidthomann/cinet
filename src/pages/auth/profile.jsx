import Header from "../../components/Header.jsx";
import Ticket from "../../components/Ticket.jsx";
import {useContext} from "react";
import Context from "../../Context.js";
import InputField from "../../components/InputField.jsx";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import games from "../../json/games.json";
import Grid from "@mui/joy/Grid";
import GamePreview from "../../components/GamePreview.jsx";

import ShopItems from '../../json/shopItems.json';


function profile() {
    const {user} = useContext(Context);

    return(
        <>
            <Header title="Profil"/>

            <Box display="flex" justifyContent="center">
                <Avatar sx={{
                    width: "10rem",
                    height: "10rem",
                    fontSize: "4rem",
                    margin: "2rem"
                }}
                >{ user.firstname.charAt(0) + user.lastname.charAt(0) }</Avatar>
            </Box>

            <Typography level="h3">Deine Punkte:</Typography>
            <Ticket pointScore={user.points} firstText="Deine Punkte" svgURL="/svg/coins.svg"/>

            <Typography level="h3">Deine Gutscheine:</Typography>
            <Box>
                { user.coupons.length === 0 ? (
                    <Typography level="h4">Du hast noch keine Gutscheine.</Typography>
                ) : (
                    <Grid container sx={{
                        maxWidth: 700,
                        margin: "auto",
                    }}>
                        {user.coupons.map((item, index) => {
                            const coupon = ShopItems.find(coupon => coupon.id === item);

                            if (!coupon) {
                                return null;
                            }

                            return (
                                <Grid item="true" xs={12} md={6} key={index} marginTop={3}>
                                    <Ticket pointScore={coupon.price} firstText={coupon.name} svgURL={coupon.svgURL}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                )}
            </Box>


            <InputField labelName="Vorname" placeholderText="John" type="text" name="firstname"/>
            <InputField labelName="Nachname" placeholderText="Doe" type="text" name="lastname"/>
            <InputField labelName="E-Mail" placeholderText="john.doe@gmail.com" type="email" name="email"/>
            <InputField labelName="Passwort" placeholderText="Passwort" type="password" name="password"/>
            <InputField labelName="Geburtstag" placeholderText="Geburtstag" type="date" name="birthday"/>
        </>
    )
}

export default profile;