import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, useTheme, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useColorMode } from '../../contexts/ColorModeContext';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Active link style indicator
  const isActive = (path: string) => location.pathname === path;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Prudhvi<Box component="span" sx={{ color: theme.palette.primary.main }}>.</Box>
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  color: isActive(page.path) ? theme.palette.primary.main : theme.palette.text.primary,
                  fontWeight: isActive(page.path) ? 600 : 400,
                  position: 'relative',
                  '&::after': isActive(page.path) ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 6,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: theme.palette.primary.main,
                  } : {},
                }}
              >
                {page.name}
              </Button>
            ))}
            <IconButton onClick={toggleColorMode} sx={{ ml: 1 }}>
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton onClick={toggleColorMode} sx={{ mr: 1 }}>
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <IconButton onClick={handleDrawerToggle}>
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { width: 280, backgroundColor: theme.palette.background.default } }}
      >
        <Box sx={{ py: 4 }}>
          <List>
            {pages.map((page) => (
              <ListItem key={page.name} disablePadding>
                <ListItemButton 
                  component={Link} 
                  to={page.path} 
                  onClick={handleDrawerToggle}
                  selected={isActive(page.path)}
                >
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};
