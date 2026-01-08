import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { Code, Storage, Cloud, Psychology, CheckCircle } from '@mui/icons-material';
import { PageTransition } from '../components/common/PageTransition';
import { services } from '../data/resume';

const iconMap: Record<string, any> = {
  Code: Code,
  Architecture: Storage,
  Launch: Cloud,
  Psychology: Psychology
};

export const Services = () => {
  return (
    <PageTransition>
      <Box sx={{ py: 12 }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom>Services</Typography>
            <Typography variant="h5" color="text.secondary">
              High-impact engineering solutions for your business.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
                    <CardContent>
                      <Box sx={{ mb: 2, color: 'primary.main' }}>
                        <Icon fontSize="large" />
                      </Box>
                      <Typography variant="h5" gutterBottom>{service.title}</Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <Box sx={{ mt: 12, textAlign: 'center' }}>
            <Typography variant="overline" color="secondary" gutterBottom>How I Work</Typography>
            <Typography variant="h3" gutterBottom>Engagement Process</Typography>
            <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
               {['Discovery', 'Architecture', 'Development', 'Testing', 'Deployment', 'Support'].map((step, i) => (
                  <Grid item key={step}>
                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, opacity: 0.9 }}>
                       <CheckCircle color="success" fontSize="small" />
                       <Typography variant="subtitle2" sx={{ fontWeight: 600, letterSpacing: '0.02em' }}>{step}</Typography>
                       {i < 5 && <Box sx={{ width: 32, height: 1, bgcolor: 'divider', display: { xs: 'none', md: 'block' }, ml: 2 }} />}
                     </Box>
                  </Grid>
               ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
};
