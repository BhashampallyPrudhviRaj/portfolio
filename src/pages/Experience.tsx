import { Box, Container, Typography, Stack, Step, StepLabel, Stepper, StepContent, useTheme } from '@mui/material';
import { PageTransition } from '../components/common/PageTransition';
import { experience } from '../data/resume';

export const Experience = () => {
  const theme = useTheme();

  return (
    <PageTransition>
      <Box sx={{ py: 12 }}>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>Work History</Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 8 }}>
            My professional journey delivering value for enterprise and startup teams.
          </Typography>

          <Stepper orientation="vertical">
            {experience.map((exp, index) => (
              <Step key={index} active={true} expanded={true}>
                <StepLabel 
                  StepIconComponent={() => (
                     <Box sx={{ 
                       width: 12, 
                       height: 12, 
                       borderRadius: '50%', 
                       bgcolor: theme.palette.primary.main 
                      }} />
                  )}
                >
                  <Typography variant="h5" component="span" sx={{ fontWeight: 700, fontSize: '1.25rem' }}>
                    {exp.role}
                  </Typography>
                  <Typography variant="h6" color="primary.main" component="span" sx={{ ml: 1.5, fontSize: '1rem', fontWeight: 500 }}>
                    @ {exp.company}
                  </Typography>
                  <Typography variant="caption" display="block" color="text.secondary">
                    {exp.period}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Box sx={{ minHeight: '100px', mb: 4, ml: 1, pl: 3, borderLeft: `1px solid ${theme.palette.divider}` }}>
                    <Typography paragraph>
                      {exp.description}
                    </Typography>
                    <ul>
                      {exp.achievements.map((ach, i) => (
                        <li key={i} style={{ marginBottom: '8px' }}>
                          <Typography variant="body2">{ach}</Typography>
                        </li>
                      ))}
                    </ul>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                       {exp.tech.map(t => (
                         <Typography key={t} variant="caption" sx={{ 
                           border: `1px solid ${theme.palette.divider}`, 
                           px: 1, 
                           py: 0.5,
                           borderRadius: 1,
                           fontWeight: 500,
                           color: 'text.primary',
                           bgcolor: 'background.paper'
                          }}>
                           {t}
                         </Typography>
                       ))}
                    </Stack>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>

        </Container>
      </Box>
    </PageTransition>
  );
};
