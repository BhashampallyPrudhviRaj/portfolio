import { Box, Container, Typography, IconButton, Stack, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { socialLinks } from '../../data/resume';

export const Footer = () => {
  const theme = useTheme();
  
  return (
    <Box component="footer" sx={{ py: 6, borderTop: `1px solid ${theme.palette.divider}` }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={3}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Prudhvi Raj B.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} All rights reserved.
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <IconButton component="a" href={socialLinks.linkedin} target="_blank" color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton component="a" href={socialLinks.github} target="_blank" color="inherit">
              <GitHub />
            </IconButton>
            <IconButton component="a" href={socialLinks.email} color="inherit">
              <Email />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
