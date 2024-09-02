import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1976d2',
        color: '#fff',
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
        <FaPhoneAlt style={{ marginRight: 8 }} />
        <a href="tel:676318866" style={{ color: '#fff', textDecoration: 'none' }}>676318866</a>
      </Typography>
      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
        <FaWhatsapp style={{ marginRight: 8 }} />
        <a href="https://wa.me/676318866" style={{ color: '#fff', textDecoration: 'none' }}>WhatsApp</a>
      </Typography>
    </Box>
  );
}

export default Footer;
