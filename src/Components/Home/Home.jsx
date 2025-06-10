import React from 'react';
import { Container, Box, Stack, Typography, Button } from "@mui/material";
import banner from "../../Assets/banner.jpg";
import bannerleft from "../../Assets/bannerleft.png";
import Navbar from '../Commen/Navbar';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';

const Home = () => {

    const textLines = ["Total", "services @", "your", "doorstep"];
    return (
        <>
            <Box sx={{ height: '100vh' }}>
                <Navbar />
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                >
                    <Box
                        width={{ xs: "100%", sm: "50%" }}
                        height={{ sm: "100vh" }}
                        sx={{
                            px: { xs: 5, md: 8 },
                            background: `url(${bannerleft})`,
                            backgroundSize: "100% 100%",
                        }}
                    >
                        <Container
                            maxWidth="sm"
                            sx={{
                                pt: { xs: 4, md: 4, lg: 24 },
                                pb: 4,
                                ml:{lg:12}
                            }}
                        >
                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                spacing={3}
                                sx={{
                                    position: "absolute",
                                    top: 1
                                }}
                            >
                                <Stack
                                    direction={{ xs: "row" }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: '22px',
                                        }}
                                        display={{ xs: "none", md: "block" }}
                                    >
                                        <PhoneInTalkIcon sx />
                                    </Box>
                                    <Box pt="2px" pl="3px" display={{ xs: "none", md: "block" }}>
                                        +91 96777 52335
                                    </Box>
                                </Stack>
                                <Stack
                                    direction={{ xs: "row" }}
                                >
                                    <Box display={{ xs: "none", md: "block" }}>
                                        <MailIcon />
                                    </Box>
                                    <Box pt="2px" pl="3px" display={{ xs: "none", md: "block" }}>
                                        wecare@totalcareservice.in
                                    </Box>
                                </Stack>
                            </Stack>
                            {textLines.map((line, index) => (
                                <Typography
                                    key={index}
                                    sx={{
                                        fontSize: { xs: "28px", sm: '32px', md: "80px" },
                                        fontWeight: 700,
                                        lineHeight: "1"
                                    }}
                                >
                                    {line}
                                </Typography>
                            ))}
                            <Typography
                                sx={{
                                    color: "#2b2b2b",
                                    fontSize: "14px",
                                    py: 4
                                }}
                            >
                                Our platform enables consumers to easily order services, including cleaning, pest control, plumbing, carpentry etc,..
                            </Typography>
                            <Button
                                className="price_btn"
                                variant="outlined"
                                sx={{
                                    borderRadius: "8px",
                                    px: 4,
                                    py: 2,
                                    fontSize: "11px",
                                    color: "#fff",
                                    background: "#5c43d2",
                                    backgroundSize: "200% auto",
                                    background: "linear-gradient(90deg, #00229E 0%, #6E1299 47.92%, #FE0094 100%)",
                                    textTransform: "none",
                                    my: 3,
                                    ":hover": {
                                        backgroundImage: "linear-gradient(to right, #7201BB 0%, #3264f5 51%, #7201BB 100%)",
                                        transition: "1s"
                                    }
                                }}
                            >
                                OUR ALL SERVICES
                            </Button>
                        </Container>
                    </Box>
                    <Box
                        width={{ xs: "100%", sm: "50%" }}
                        height={{ xs: 250, sm: "100vh" }}
                        sx={{
                            position: "relative",
                            background: `url(${banner})`,
                            backgroundSize: "100% 100%",
                            ":hover": {
                                ':before': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                    transitionDuration: "2s",
                                    opacity: "0"
                                },
                                ':after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                    transitionDuration: "2s",
                                    opacity: "0"
                                },
                            },
                            ':before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '0%',
                                height: '0%',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            },
                            ':after': {
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '0%',
                                height: '0%',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            },
                        }}
                    >
                    </Box>
                </Stack>
            </Box>
            <Box sx={{
                background: "#0A0624",
                height: "117px",
                width: "100%"
            }}>

            </Box>
        </>
    )
}

export default Home;