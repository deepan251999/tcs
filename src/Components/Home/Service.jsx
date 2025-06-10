import React from 'react';
import { Box, Stack, Typography, Container, IconButton } from "@mui/material";
import servicebg from "../../Assets/servicebg.png";
import { ServiceDataCards } from '../../DataHelper/ServiceDataCards';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import introbg from "../../Assets/introbg.png";
import intro from "../../Assets/intro.png";
import ball from "../../Assets/ball.png"

const Service = () => {

    return (
        <>
            <Box
                width={{ xs: "100%" }}
                sx={{
                    background: `url(${servicebg})`,
                    backgroundSize: "100% 100%",
                    backgroundColor: "#FFF0FA",
                    py: 6
                }}
            >
                <Stack
                    direction="column"
                    alignItems="center"
                >
                    <Typography
                        sx={{
                            border: "1px solid #EACADF",
                            borderRadius: "50px",
                            height: "37px",
                            width: "183px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "linear-gradient(90deg, #00229E 0%, #6E1299 47.92%, #FE0094 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Our Service
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 26,
                            fontWeight: 700,
                            lineHeight: 1,
                            py: 2,
                            textTransform: 'uppercase',
                            textAlign: "center"
                        }}
                    >
                        WE OFFER TOTAL SERVICES.
                    </Typography>
                </Stack>
                <Box sx={{ py: 5 }}>
                    <Container fixed>
                        <Stack direction={{ xs: "column", sm: "row" }} flexWrap="wrap" justifyContent="center">
                            {
                                ServiceDataCards.map((serviceData) => (
                                    <Box
                                        className="service_card"
                                        width={{ xs: "90%", sm: "40%", lg: "30%" }}
                                        sx={{
                                            m: 2,
                                            boxShadow: "0px 0px 30px 0px #0000000D",
                                            background: "#FFFFFF",
                                            borderRadius: "8px",
                                            py: 2,
                                            px: 3,
                                            transition: "all 0.3s ease-in-out",
                                            ':hover': {
                                                transform: "translateY(-10px)",
                                                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.1)",
                                            }
                                        }}
                                    >
                                        <Stack direction={{ xs: "column", md: "row" }}>
                                            <Box>
                                                <img src={serviceData.image} alt="service pic"width="100%" />
                                            </Box>
                                            <Box
                                                sx={{
                                                    width: 45,
                                                    height: 45,
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                                    cursor: 'pointer',
                                                    background: 'linear-gradient(90deg, #00229E 0%, #6E1299 47.92%, #FE0094 100%)',
                                                    color: "#fff",
                                                    mx: {xs:"auto",lg:5},
                                                    my: 5,
                                                    ':hover': { backgroundColor: '#FE0094', color: '#fff' },
                                                }}
                                            >
                                                {serviceData.icon}
                                            </Box>
                                        </Stack>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: "22px", sm: "22px", md: "22px", lg: "22px" },
                                                fontWeight: 600,
                                                pt: 2,
                                                textAlign:{xs:"center",md:"start"}
                                            }}
                                        >
                                            {serviceData.head}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: 16,
                                                color: "#5F6C76",
                                                fontWeight: 400,
                                                py: 2,
                                                textAlign:{xs:"center",md:"start"}
                                            }}
                                        >
                                            {serviceData.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                pt: 1,
                                                textAlign: "center",
                                                color: "#2B2B2B"
                                            }}
                                        >
                                            {serviceData.para}
                                        </Typography>
                                    </Box>
                                ))
                            }

                        </Stack>
                        {/* INDRO VIDEO */}
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: 1200,
                                height: 400,
                                borderRadius: '10px',
                                overflow: 'hidden',
                                mx: 'auto',
                                my: 5,
                                background: `url(${introbg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    position: 'absolute',
                                    left: 140,
                                    top: 60,
                                    color: 'transparent',
                                    fontWeight: 700,
                                    fontSize: { xs: '36px', md: '125px' },
                                    lineHeight: 1,
                                    textTransform: 'uppercase',
                                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                                    zIndex: 2,
                                }}
                            >
                                INTRO
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    position: 'absolute',
                                    left: 240,
                                    top: 190,
                                    color: 'transparent',
                                    fontWeight: 700,
                                    fontSize: { xs: '36px', md: '125px' },
                                    lineHeight: 1,
                                    textTransform: 'uppercase',
                                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                                    zIndex: 2,
                                }}
                            >
                                VIDEO
                            </Typography>
                            <Box
                                sx={{
                                    position: "absolute",
                                    right: 80,
                                    width: 314,
                                    height: 358,
                                    background: `url(${intro})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    '&:hover .pulse': {
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 0 0 15px rgba(254, 0, 148, 0.2)',
                                    },
                                }}
                            >
                                <IconButton
                                    className="pulse"
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: '#fff',
                                        color: '#FE0094',
                                        transition: 'all 0.3s ease',
                                        zIndex: 3,
                                        ':hover': {
                                            backgroundColor: '#eee',
                                        },
                                    }}
                                >
                                    <PlayArrowIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                            </Box>

                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(10, 6, 36, 0.4)',
                                    zIndex: 1,
                                }}
                            />
                        </Box>
                    </Container>
                </Box>
            </Box>

            <Box
                sx={{
                    background: 'linear-gradient(90deg, #00229E 0%, #6E1299 47.92%, #FE0094 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    py: 3
                }}
            >
                <Container fixed>
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ height: '100%', textAlign: 'center' }}
                    >
                        <Box sx={{ color: '#fff', py: 3 }} width={{ xs: "100%", sm: "20%", md: "10%", lg: "10%" }}>
                            <Typography variant="h5" fontWeight="bold" sx={{ textAlign: "center" }}>835+</Typography>
                            <Typography fontSize="13px">Total products</Typography>
                        </Box>
                        <Box width={{ md: "10%", lg: "10%" }} display={{ xs: "none", md: "block" }}>
                            <img src={ball} alt="icon" style={{ width: 40, height: 40 }} />
                        </Box>
                        <Box sx={{ color: '#fff', py: 3 }} width={{ xs: "100%", sm: "20%", md: "10%", lg: "10%" }}>
                            <Typography variant="h5" fontWeight="bold" sx={{ textAlign: "center" }}>6246+</Typography>
                            <Typography fontSize="13px">Project Completed</Typography>
                        </Box>
                        <Box width={{ md: "10%", lg: "10%" }} display={{ xs: "none", md: "block" }}>
                            <img src={ball} alt="icon" style={{ width: 40, height: 40 }} />
                        </Box>
                        <Box sx={{ color: '#fff', py: 3 }} width={{ xs: "100%", sm: "20%", md: "10%", lg: "10%" }}>
                            <Typography variant="h5" fontWeight="bold" sx={{ textAlign: "center" }}>2000+</Typography>
                            <Typography fontSize="13px">Happy Customers</Typography>
                        </Box>
                        <Box width={{ md: "10%", lg: "10%" }} display={{ xs: "none", md: "block" }}>
                            <img src={ball} alt="icon" style={{ width: 40, height: 40 }} />
                        </Box>
                        <Box sx={{ color: '#fff', py: 3 }} width={{ xs: "100%", sm: "20%", md: "10%", lg: "10%" }}>
                            <Typography variant="h5" fontWeight="bold" sx={{ textAlign: "center" }}>60+</Typography>
                            <Typography fontSize="13px">Team Members</Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>

        </>
    )
}

export default Service;