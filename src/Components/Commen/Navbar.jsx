import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../Assets/logo.png";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";

const navItems = ["Home", "About", "Services"];

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {navItems.map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <>
            <AppBar
                position="static"
                sx={{
                    background: "linear-gradient(to right, #2b32b2, #ff0099)",
                    width: { xs: "100%", md: "70%" },
                    py: 1,
                    px: 2,
                    borderRadius: "8px",
                    position: { md: "absolute" },
                    top: 40,
                    left: 100,
                    zIndex: 999
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box width="20%">
                        <img src={Logo} alt="" height="53px" width="120px" />
                    </Box>
                    {/* Desktop Nav */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, width: "60%", gap: 2 }}>
                        {navItems.map((item) => (
                            <Box
                                key={item}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "#fff",
                                    fontSize: "11px",
                                    px: 3,
                                    cursor: "pointer",
                                    transition:"1s",
                                    ':hover':{
                                        color:"#FE0094"
                                    }
                                }}
                            >
                                <Typography sx={{ fontSize: "11px", mr: 0.5 }}>{item}</Typography>
                                <IoIosArrowRoundDown style={{ fontSize: "11px" }} />
                            </Box>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            border: '2px solid white',
                            borderRadius: '50%',
                            padding: '8px',
                            display: {xs:"none",md:'flex'},
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            mx:2,
                            ':hover':{
                                cursor:"pointer"
                            }
                        }}
                    >
                        <FaBagShopping color="white" />
                    </Box>
                    <Box display={{ xs: "none", sm: "block" }}>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#fff",
                                color: "#000",
                                fontWeight: 600,
                                fontSize: "11px",
                                borderRadius: "8px",
                                py: 2,
                                px: 3,
                                textWrap: "nowrap",
                                transition:"1s",
                                ':hover':{
                                    background:"#FE0094",
                                    color:"#fff"
                                }
                            }}
                        >
                            GET FREE QUOTE
                        </Button>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: "flex", md: "none" } }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawer}
            </Drawer>
        </>
    )
}

export default Navbar;