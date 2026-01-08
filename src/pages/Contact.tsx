import { Box, Container, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import { Send, Email, LinkedIn, Phone } from '@mui/icons-material';
import { PageTransition } from '../components/common/PageTransition';
import { socialLinks } from '../data/resume';

export const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = data.get('subject') as string;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`;
    
    window.location.href = `mailto:bhashampallyprudhviraj@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageTransition>
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={5}>
              <Typography variant="h2" gutterBottom>Let's Talk.</Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Have a project in mind or looking for a Senior Java Full Stack Engineer? I am currently available for new opportunities.
              </Typography>
              
              <Box sx={{ mt: 6 }}>
                {[
                   { icon: <Email />, text: "bhashampallyprudhviraj@gmail.com", href: socialLinks.email },
                   { icon: <Phone />, text: "+1 (518) 948-2833", href: `tel:${socialLinks.phone}` },
                   { icon: <LinkedIn />, text: "LinkedIn Profile", href: socialLinks.linkedin },
                ].map((item, i) => (
                   <Button 
                     key={i} 
                     startIcon={item.icon} 
                     href={item.href} 
                     color="inherit" 
                     sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2, pl: 0 }}
                   >
                     {item.text}
                   </Button>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Paper sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom>Send a Message</Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Name" name="name" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Email" name="email" type="email" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Subject" name="subject" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Message" name="message" multiline rows={4} fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" size="large" endIcon={<Send />}>
                        Open Email Client
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PageTransition>
  );
};
