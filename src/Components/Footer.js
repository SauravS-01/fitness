import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const Footer = () => (
  <Box mt="80px" boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px">
    
      
    
    <Typography sx={{ fontSize: { lg: '22px', xs: '20px' } }} pb="22px" textAlign="center" fontFamily="cursive">Made with ❤️ by Saurav</Typography>
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap" flex justifyContent="center">
    <Link to="/">
    <Typography style={{color:"#FF2625"}} sx={{ fontSize: { lg: '22px', xs: '20px' } }} pb="22px" textAlign="center" fontFamily="cursive">Go to Home</Typography>
      </Link>
    </Stack>
  </Box>
);

export default Footer;