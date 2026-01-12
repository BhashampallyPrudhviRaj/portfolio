import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { PageTransition } from '../components/common/PageTransition';
import { about, skills } from '../data/resume';

export const About = () => {
  return (
    <PageTransition>
      <Box sx={{ py: 12 }}>
        <Container>
           <Grid container spacing={8}>
             <Grid item xs={12} md={7}>
                <Typography variant="overline" color="secondary">About Me</Typography>
                <Typography variant="h2" gutterBottom>Developer</Typography>
                <Typography paragraph sx={{ fontSize: '1.2rem', color: 'text.secondary' }}>
                   {about.summary}
                </Typography>
              <Typography paragraph>
                I have navigated the complexities of improving legacy systems and building greenfield cloud-native solutions. My focus is always on <b>business impact</b>—whether that's optimizing backend latency by 25% or reducing unauthorized access incidents by 30% through improved security protocols.
              </Typography>
             </Grid>
             <Grid item xs={12} md={5}>
                <Card variant="outlined">
                   <CardContent>
                      <Typography variant="h6" gutterBottom>Technical Arsenal</Typography>
                      {Object.entries(skills).map(([category, items]) => (
                        <Box key={category} sx={{ mb: 3 }}>
                           <Typography variant="subtitle2" color="primary" sx={{ textTransform: 'uppercase' }}>
                             {category}
                           </Typography>
                           <Typography variant="body2">
                             {items.join(', ')}
                           </Typography>
                        </Box>
                      ))}
                   </CardContent>
                </Card>
             </Grid>
           </Grid>
        </Container>
      </Box>
    </PageTransition>
  );
};
