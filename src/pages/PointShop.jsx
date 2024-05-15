import Header from '../components/Header';
import Grid from '@mui/joy/Grid';
import PointScore from '../components/PointScore';

import ShopItems from '../json/shopItems.json';
import Ticket from "../components/Ticket.jsx";

function PointShop() {
    return (
        <>
            <Header title="Punkte einlösen"/>
            <Grid container sx={{
                maxWidth: 700,
                margin: "auto",
            }}>
                {ShopItems.map((item, index) => {
                    return (
                        <Grid item="true" xs={12} md={6} key={index} marginTop={3}>
                            <Ticket pointScore={item.price} firstText={item.name} svgURL={item.svgURL}/>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    );
}

export default PointShop;
