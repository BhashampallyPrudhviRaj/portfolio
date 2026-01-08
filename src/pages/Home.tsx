import { Box, Button, Container, Grid, Typography, useTheme, Chip, Stack } from '@mui/material';
import { ArrowForward, RocketLaunch } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { Section } from '../components/common/Section';
import { PageTransition } from '../components/common/PageTransition';
import { projects } from '../data/resume';

export const Home = () => {
  const theme = useTheme();

  return (
    <PageTransition>
      {/* Hero Section */}
      <Box 
        sx={{ 
          minHeight: '90vh', 
          display: 'flex', 
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          // Decorative background elements
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
            zIndex: -1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10%',
            left: '-10%',
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle, ${theme.palette.secondary.main}15 0%, transparent 70%)`,
            zIndex: -1,
          }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box mb={2}>
                <Chip 
                  label="Available for Projects & Hiring" 
                  color="secondary" 
                  size="small" 
                  variant="outlined"
                  sx={{ fontWeight: 600, mb: 2 }}
                />
              </Box>
              <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
                Hi, I'm Prudhvi.<br />
                I Build 
                <Box component="span" sx={{ color: 'primary.main', ml: 1 }}>
                  <Typewriter
                    words={['Scalable SaaS', 'Enterprise Apps', 'AI/ML Solutions']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </Box>
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', lineHeight: 1.6 }}>
                Full Stack Developer & Founder delivering high-performance microservices and intuitive React interfaces.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  component={RouterLink}   
                  to="/contact"
                  endIcon={<ArrowForward />}
                >
                  Hire Me
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  component={RouterLink}
                  to="/projects"
                >
                  View Work
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Trust Strip */}
      <Box sx={{ py: 4, bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}>
        <Container>
          <Grid container spacing={2} justifyContent="center" sx={{ textAlign: 'center', opacity: 0.7 }}>
            {['Proven Impact', 'Enterprise Scale', 'Java & React Expert', 'Microservices', 'Clean Code'].map((item) => (
              <Grid item xs={6} sm={2} key={item}>
                <Typography variant="overline" sx={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em' }}>{item}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Work Preview */}
      <Section>
        <Container>
          <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
            <Box>
              <Typography variant="overline" color="primary" fontWeight="bold">Selected Work</Typography>
              <Typography variant="h3">Featured Projects</Typography>
            </Box>
            <Button component={RouterLink} to="/projects" endIcon={<ArrowForward />}>View All</Button>
          </Box>
          
          <Grid container spacing={3}>
            {projects.filter(p => p.featured).slice(0, 3).map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <Box 
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    borderRadius: 2, 
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: theme.palette.primary.main
                    }
                  }}
                >
                  <RocketLaunch color="primary" sx={{ mb: 2, fontSize: 32 }} />
                  <Typography variant="h5" gutterBottom>{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {project.tech.slice(0, 3).map(t => (
                      <Chip key={t} label={t} size="small" />
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    </PageTransition>
  );
};
