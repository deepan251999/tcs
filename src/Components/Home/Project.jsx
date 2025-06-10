import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import projectcart1 from "../../Assets/projectcart1.png";
import projectcart2 from "../../Assets/projectcart2.png";
import projectcart3 from "../../Assets/projectcart3.png";

const Project = () => {

    const projects = [
        {
            title: 'PVR Cinemas',
            location: 'Chennai',
            image: projectcart1,
        },
        {
            title: 'DLF IT Park',
            location: 'Chennai',
            image: projectcart2,
        },
        {
            title: 'SC Info City',
            location: 'Chennai',
            image: projectcart3,
        },
    ];

    return (
        <>
            <Box sx={{ backgroundColor: '#FFEFFB', py: 8 }}>
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: 4,
                        maxWidth: '1200px',
                        mx: 'auto',
                        px: { xs: 2, md: 14 },
                        py: 6,
                    }}
                >
                    <Typography
                        variant="button"
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
                            mx: { xs: "auto", md: "0" }
                        }}
                    >
                        Our Project
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: { xs: 'center', md: 'center', lg: 'space-between' },
                            flexWrap: 'wrap',
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={{ my: { xs: 2, md: 0 } }}
                            textAlign="center"
                        >
                            COMPLETE PROJECTS
                        </Typography>

                        <Typography sx={{ maxWidth: 400, color: "#5F6C76" }} textAlign={{ xs: "center", md: "start" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor{' '}
                            <Box component="span" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                                incididunt ut labore et dolore magna aliqua.
                            </Box>{' '}
                            Ut enim ad minim veniam, quis nostrud exercitation.
                        </Typography>
                    </Box>

                    <Grid container mt={4} spacing={2} justifyContent="center">
                        {projects.map((proj, idx) => (
                            <Grid item xs={12} sm={6} md={4} key={idx}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: 3,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={proj.image}
                                        alt={proj.title}
                                        sx={{
                                            width: '100%',
                                            height: 300,
                                            objectFit: 'cover',
                                            display: 'block',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background: "linear-gradient(180deg, rgba(8, 21, 42, 0) 0%, #08152A 100%)",
                                            color: 'white',
                                            p: 2,
                                        }}
                                    >
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {proj.title}
                                        </Typography>
                                        <Typography variant="body2">{proj.location}</Typography>
                                    </Box>

                                    <Button
                                        sx={{
                                            position: 'absolute',
                                            bottom: 16,
                                            right: 16,
                                            minWidth: 0,
                                            p: 1,
                                            borderRadius: '50%',
                                            backgroundColor: '#FFDDEE',
                                            color: '#000',
                                            '&:hover': {
                                                background: 'linear-gradient(90deg, #00229E 0%, #6E1299 47.92%, #FE0094 100%)',
                                                color: "#fff"
                                            },
                                        }}
                                    >
                                        <NorthEastIcon />
                                    </Button>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0A0624',
                                borderRadius: 2,
                                px: 4,
                                py: 1.5,
                                mt: 6,
                                fontWeight: 700,
                                fontSize:"10px",
                                textTransform: 'none',
                                ':hover': {
                                    backgroundColor: '#2D2D4D',
                                },
                            }}
                        >
                            VIEW OTHER PROJECT
                        </Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Project;