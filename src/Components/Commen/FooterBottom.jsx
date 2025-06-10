import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

const FooterBottom = () => {
    return (
        <Grid container sx={{ height: "60px", width: "100%" }}>
            <Grid item size={{ xs: 12, md: 6 }}>
                <Box
                    sx={{
                        height: '100%',
                        bgcolor: '#0C0520',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Typography variant="body2">
                        Copyright © 2025 <span style={{ color: "#6E1299", fontWeight: 600 }}>TCS</span> &nbsp; All Right Reserved
                    </Typography>

                    {/* <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: -10,
                            width: '20px',
                            height: '100%',
                            backgroundColor: '#fff',
                            transform: 'skewX(-25deg)',
                            zIndex: 2
                        }}
                    /> */}
                </Box>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
                <Box
                    sx={{
                        height: '100%',
                        background: 'linear-gradient(to right, #9B00FF, #FF0080)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 500
                    }}
                >
                    <Link to="#" underline="none" color="inherit" sx={{ mx: 1 }}>
                        Privacy & Policy || Terms & Conditions
                    </Link>
                </Box>
            </Grid>
        </Grid>
    );
};

export default FooterBottom;
