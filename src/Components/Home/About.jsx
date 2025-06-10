import React from 'react';
import { Box, Typography, Button, Stack, Grid } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import aboutleft from "../../Assets/aboutleft.jpg";
import about from "../../Assets/about.jpg";

const About = () => {
    return (
        <>
            <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 6, md: 10 }, bgcolor: '#fff' }}>
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    <Grid item size={{ xs: 12, md: 6 }} >
                        <Box sx={{ position: 'relative' }} display="flex" flexWrap="wrap" justifyContent="space-evenly" >
                            <Box
                                component="img"
                                src={aboutleft}
                                alt="cleaning"
                                sx={{
                                    width: { xs: "100%",sm:"40%", md: "100%", lg: '100%' },
                                    maxWidth: 400,
                                    boxShadow: 3,
                                    position: { lg: 'absolute' },
                                    bottom: -60,
                                    left: 120,
                                    zIndex: 1,
                                    mb: {xs:5,sm:0,md:5}
                                }}
                            />
                            <Box
                                component="img"
                                src={about}
                                alt="security"
                                sx={{
                                     width: { xs: "100%",sm:"40%", md: "100%", lg: '100%' },
                                    maxWidth: 400,
                                    position: { lg: 'absolute' },
                                    top: 0,
                                    left: 220,
                                    boxShadow: 3,
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Text Section */}
                    <Grid item size={{ xs: 12, md: 6 }} >
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: 'center', md: "start" } }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    border: "1px solid #EACADF",
                                    color: '#FE0094',
                                    borderRadius: 20,
                                    textTransform: 'none',
                                    px: 2,
                                    mb: 2,
                                    fontWeight: 500,
                                    background: "linear-gradient(90deg, #00229E 0%, #6E1299 47.92%, #FE0094 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                About TCS
                            </Button>
                        </Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                color: '#0A0624',
                                mb: 3,
                                lineHeight: 1.2,
                                textAlign: { xs: "center", md: "start" }
                            }}
                        >
                            WHERE CLEANLINESS<br />MEETS CARE!
                        </Typography>

                        <Stack direction={{ xs: "coloum", md: "row" }} spacing={2} justifyContent="center" alignItems="center"  mb={2}>
                            <Box
                                sx={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: 2,
                                    background: 'linear-gradient(135deg, #00229E, #6E1299, #FE0094)',
                                    color: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    textAlign: 'center',
                                    position: 'relative',
                                    px: 6
                                }}
                            >
                                <ArrowOutwardIcon sx={{ position: 'absolute', top: 8, right: 8, fontSize: 18 }} />
                                <Typography variant="h6">10</Typography>
                                <Typography sx={{ fontSize: 12 }}>Years Experience</Typography>
                            </Box>

                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1,mt:{xs:3,md:0} }} textAlign={{xs:"center",md:"start"}}>
                                    Mission & Vision
                                </Typography>
                                <Typography sx={{ color: '#666', fontSize: 15 }} textAlign={{xs:"center",md:"start"}}>
                                    At TCS, our mission is to elevate the standard of cleanliness and well-being in every space we touch.
                                    We aim to deliver reliable, professional, and customized housekeeping services that bring comfort,
                                    health, and peace of mind to our clients.
                                </Typography>
                                <Box display="flex" justifyContent={{xs:"center",md:"start"}}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#0A0624',
                                            borderRadius: 2,
                                            px: 4,
                                            py: 1.5,
                                            mt: 3,
                                            fontWeight: 700,
                                            textTransform: 'none',
                                            ':hover': {
                                                backgroundColor: '#2D2D4D',
                                            },
                                        }}
                                    >
                                        Learn More About
                                    </Button>
                                </Box>
                            </Box>
                        </Stack>


                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default About;