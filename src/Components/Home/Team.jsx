import React from 'react';
import { Container, Box, Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { TeamDataCards } from "../../DataHelper/TeamDataCards";

const Team = () => {
    return (
        <>
            <Box
                width={{ xs: "100%" }}
                sx={{
                    py: 6
                }}
            >
                <Container fixed>
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
                            Our Team
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 26,
                                fontWeight: 700,
                                lineHeight: 1,
                                pt: 2,
                                pb: 6,
                                textTransform: 'uppercase',
                                textAlign: "center"
                            }}
                        >
                            MEET OUR PROFESSIONAL TEAM.
                        </Typography>
                    </Stack>
                    <Box sx={{ py: 6 }}>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            flexWrap="wrap"
                            justifyContent="center"
                        >
                            {
                                TeamDataCards.map((teamDataCards) => (
                                    <Box
                                        key={teamDataCards.id}
                                        width={{ xs: "90%", sm: "40%", md: "40%", lg: "21%" }}
                                        sx={{
                                            mx: 2,
                                            my: 5,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            border: "1px solid #EEEEEE",
                                            position: "relative",
                                            py: 2,
                                            ":hover": {
                                                '& .headImg': {
                                                    transform: 'scale(1.1)',
                                                    overflow: "hidden",
                                                    transition: 'all .3s ease-in-out',
                                                }
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                overflow: "hidden",
                                                borderRadius: "50%",
                                                height: 150,
                                                width: 150,
                                                position: "absolute",
                                                top: -76,
                                                left: "50%",
                                                transform: "translateX(-50%)"
                                            }}
                                        >
                                            <img
                                                className="headImg"
                                                src={teamDataCards.image}
                                                alt="pic"
                                                style={{
                                                    borderRadius: "50%",
                                                    height: "100%",
                                                    width: '100%'
                                                }}
                                            />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                fontWeight: 500,
                                                pt: 13
                                            }}
                                        >
                                            {teamDataCards.head}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "#585858",
                                                py: 2,
                                                fontSize: "15px",
                                                textAlign: "center"
                                            }}
                                        >
                                            {teamDataCards.title}
                                        </Typography>
                                        <Box sx={{ background: "#FFF0FA", borderRadius: "8px", py: 1, px: 2 }}>
                                            <Stack direction="row">
                                                {teamDataCards.icon.map((iconData, index) => (
                                                    <Link to="" key={index} underline="none">
                                                        <Box
                                                            sx={{
                                                                width: 40,
                                                                height: 40,
                                                                mx: 1,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                borderRadius: "50%",
                                                                background: "#fff",
                                                                color: "#5F6C76",
                                                                fontSize: "18px",
                                                                transition: "background-color .2s ease-in-out",
                                                                ":hover": {
                                                                    backgroundColor: index % 2 === 0 ? "#FE0094" : "#00bcd4",
                                                                    color: "#fff",
                                                                },
                                                            }}
                                                        >
                                                            {iconData}
                                                        </Box>
                                                    </Link>
                                                ))}
                                            </Stack>

                                        </Box>
                                    </Box>
                                ))
                            }
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Team;