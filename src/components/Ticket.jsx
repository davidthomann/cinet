import "../css/ticket.css"
import {Card} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import PropTypes from "prop-types";
import PointScore from "./PointScore.jsx";
import Box from "@mui/joy/Box";

const Ticket = (props) => {

    return(
            <Card component="article" className="ticket-wrapper" sx={{
                marginX: 'auto',
                maxWidth: 325,
                maxHeight: 190,
            }}>
                <Box className="ticket-box" sx={{
                    backgroundImage: `url("${props.svgURL}")`
                }}>
                    <Typography level="h1" sx={{color: "white",}}>{props.pointScore}</Typography>
                    <Typography level="p" sx={{
                        color: "white",
                        marginTop: 7,
                    }}>{props.firstText}</Typography>
                </Box>
            </Card>
    )
}

PointScore.propTypes = {
    firstText: PropTypes.string.isRequired,
    pointScore: PropTypes.number.isRequired,
    svgURL: PropTypes.string.isRequired,
};

export default Ticket;