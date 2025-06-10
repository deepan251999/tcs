import React from 'react';
import footerbg from "../../Assets/footerbg.png";
import { Box, Grid, Container, Typography, TextField, Button, Stack, Link } from '@mui/material';
import { FaFacebookF, FaTwitter, FaSkype, FaLinkedinIn } from 'react-icons/fa';
import footerlogo from "../../Assets/footerlogo.png";
import footergal1 from "../../Assets/footergal1.png";
import footergal2 from "../../Assets/footergal2.png";
import footergal3 from "../../Assets/footergal3.png";
import footergal4 from "../../Assets/footergal4.png";
import footergal5 from "../../Assets/footergal5.png";
import footergal6 from "../../Assets/footergal6.png";
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <>
      <Box
        width={{ xs: "100%" }}
        sx={{
          background: `url(${footerbg})`,
          backgroundSize: "100% 100%",
          backgroundColor: "#FFF0FA",
          py: 12
        }}
      >
        <Container fixed>
          <Grid container spacing={2} >
            <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 4 }}  >
              <img
                className="headImg"
                src={footerlogo}
                alt="pic"
                style={{
                  height: "125px",
                  width: '270px'
                }}
              />
              <Typography sx={{ mt: 2, fontSize: 14, lineHeight: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua
              </Typography>
              <Stack direction="row" spacing={2} mt={3}>
                {[<FaFacebookF />, <FaTwitter />, <FaSkype />, <FaLinkedinIn />].map((Icon, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 35,
                      height: 35,
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      ':hover': { backgroundColor: '#FE0094', color: '#fff' },
                    }}
                  >
                    {Icon}
                  </Box>
                ))}
              </Stack>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 2 }} >
              <Typography sx={{ fontWeight: 700, borderBottom: '2px solid #000', display: 'inline-block', my: 6 }}>
                QUICK LINKS :
              </Typography>
              <Stack spacing={1}>
                {['Privacy & policy', 'Terms & conditions', 'FAQ', 'Customer support', 'Contact us'].map((text, idx) => (
                  <Link to="#" underline="hover" color="inherit" key={idx} sx={{ pb: 2 }}>
                    {text}
                  </Link>
                ))}
              </Stack>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 3 }} >
              <Typography sx={{ fontWeight: 700, borderBottom: '2px solid #000', display: 'inline-block', my: 6 }}>
                SUBSCRIP NEWSLETTER :
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your email:"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 1,
                  mb: 2,
                }}
              />
              <Button
                fullWidth
                sx={{
                  background: 'linear-gradient(to right, #9B00FF, #FF0080)',
                  color: '#fff',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  width: "194px",
                  height: "58px",
                  borderRadius: "8px"
                }}
              >
                Subscribe Now
              </Button>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 3 }} >
              <Typography sx={{ fontWeight: 700, borderBottom: '2px solid #000', display: 'inline-block', my: 6 }}>
                OUR GALLERY:
              </Typography>
              <Grid container spacing={1}>
                {[footergal1, footergal2, footergal3, footergal4, footergal5, footergal6].map((img, i) => (
                  <Grid item size={4} key={i}>
                    <Box
                      component="img"
                      src={img}
                      alt={`footer gallery ${i + 1}`}
                      sx={{
                        width: '100%',
                        height: 60,
                        objectFit: 'cover',
                        borderRadius: 1,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <FooterBottom />
    </>
  )
}

export default Footer;