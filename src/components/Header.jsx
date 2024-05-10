import PropTypes from 'prop-types';
import {useContext, useState} from 'react';
import Drawer from '@mui/joy/Drawer';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/icons-material/Menu';
import Home from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/joy/Divider';
import {Link} from 'react-router-dom';

import Box from '@mui/joy/Box';
import Context from "../Context.js";

function Header(props) {
    const { user } = useContext(Context);
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="space-between" padding="1rem">
                <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
                    <Menu/>
                </IconButton>
                <Typography level="h1">{props.title}</Typography>
                <IconButton disabled></IconButton>
            </Box>

            <Drawer open={open} onClose={() => setOpen(false)}>
                <ModalClose/>
                <DialogTitle>Navigation</DialogTitle>

                <List>
                    {/* Home Button */}
                    <ListItem>
                        <ListItemButton component={Link} to="/">
                            <ListItemDecorator>
                                <Home/>
                            </ListItemDecorator>
                            <ListItemContent>Home</ListItemContent>
                            <KeyboardArrowRight/>
                        </ListItemButton>
                    </ListItem>
                    {/* Map Button */}
                    <ListItem>
                        <ListItemButton component={Link} to="/games">
                            <ListItemDecorator>
                                <SportsEsportsIcon/>
                            </ListItemDecorator>
                            <ListItemContent>Games</ListItemContent>
                            <KeyboardArrowRight/>
                        </ListItemButton>
                    </ListItem>
                    {/* Map Button */}
                    <ListItem>
                        <ListItemButton component={Link} to="/points">
                            <ListItemDecorator>
                                <StorefrontIcon/>
                            </ListItemDecorator>
                            <ListItemContent>Punkte einlösen</ListItemContent>
                            <KeyboardArrowRight/>
                        </ListItemButton>
                    </ListItem>
                    {/* Map Button */}
                    <ListItem>
                        <ListItemButton component={Link} to="/map">
                            <ListItemDecorator>
                                <LocationOnIcon/>
                            </ListItemDecorator>
                            <ListItemContent>Map</ListItemContent>
                            <KeyboardArrowRight/>
                        </ListItemButton>
                    </ListItem>
                </List>


                <Divider/>
                {user ?(
                    <Box p={1}>
                        <Avatar>{ user.firstname.charAt(0) + user.lastname.charAt(0) }</Avatar>
                    </Box>
                ) : (
                    <Box p={1} display="flex" flexDirection="column">
                        <Link to={"/auth/login"}>Login</Link>
                        <Link to={"/auth/registration"}>Registrieren</Link>
                    </Box>
                )}
            </Drawer>
        </>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;