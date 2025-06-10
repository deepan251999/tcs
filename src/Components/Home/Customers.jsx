import React from 'react';
import { Box, Typography, Avatar, Grid, IconButton, Container } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import customerlogo from "../../Assets/customerlogo.png";
import quote from "../../Assets/quote.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Customers = () => {
    const testimonials = [
        {
            name: 'MATTIE WARNER',
            role: 'Business Man',
            image: customerlogo,
            quote:
                '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
        },
        {
            name: 'MATTIE WARNER',
            role: 'Business Man',
            image: customerlogo,
            quote:
                '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
        },
    ];
    return (
        <>
            <Box sx={{ py: 8 }}>
                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="button"
                        sx={{
                            px: 2,
                            py: 0.5,
                            border: '1px solid #FFDDEE',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#3D3D3D',
                        }}
                    >
                        Happy Customers
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" mt={2}>
                        LOVE LETTERS FROM <br />
                        OUR CLIENTS
                    </Typography>
                </Box>
                <Container fixed>
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ px: 2 }}
                    >
                        <Grid item>
                            <IconButton
                                sx={{
                                    backgroundColor: '#FFF0FA',
                                    borderRadius: '50%',
                                    p: 1,
                                    boxShadow: 1,
                                    border: "2px solid #FFF0FA",
                                    background: "#fff"
                                }}
                            >
                                <IoIosArrowRoundBack fontSize="24px" color='#0A0624' />
                            </IconButton>
                        </Grid>

                        {testimonials.map((item, index) => (
                            <Grid item size={{ xs: 12, sm: 12, md: 5 }} key={index}>
                                <Box
                                    sx={{
                                        backgroundColor: '#FFF0FA',
                                        borderRadius: 2,
                                        p: 4,
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontStyle: 'italic',
                                            textDecoration: 'underline',
                                            mb: 4,
                                            color: "#5F6C76"
                                        }}
                                    >
                                        {item.quote}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            borderTop: '1px dotted #ddd',
                                            pt: 3,
                                            mt: 3,
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar src={item.image} alt={item.name} sx={{ mr: 2 }} />
                                            <Box textAlign="left">
                                                <Typography fontWeight="bold" fontSize="14px">
                                                    {item.name}
                                                </Typography>
                                                <Typography
                                                    fontSize="13px"
                                                    sx={{
                                                        color: 'magenta',
                                                        fontWeight: 500,
                                                        background: "linear-gradient(90deg, #00229E 0%, #6E1299 47.92%, #FE0094 100%)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                    }}
                                                >
                                                    {item.role}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <img src={quote} alt="" width="70px" />
                                        {/* <FormatQuoteIcon
                                            sx={{
                                                fontSize: 40,
                                                background: 'linear-gradient(to right, #1A1AFF, #FF1493)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}
                                        /> */}
                                    </Box>
                                </Box>
                            </Grid>
                        ))}

                        <Grid item>
                            <IconButton
                                sx={{
                                    backgroundColor: '#FFF0FA',
                                    borderRadius: '50%',
                                    p: 1,
                                    boxShadow: 1,
                                    border: "2px solid #FFF0FA",
                                    background: "#fff"
                                }}
                            >
                                <IoIosArrowRoundForward fontSize="24px" color='#0A0624' />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Customers;