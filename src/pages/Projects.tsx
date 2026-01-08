import { Box, Container, Grid, Typography, Chip, Tabs, Tab, Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { PageTransition } from '../components/common/PageTransition';
import { Section } from '../components/common/Section';
import { projects } from '../data/resume';
import { useState } from 'react';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <PageTransition>
      <Box sx={{ py: 12 }}>
        <Container>
          <Typography variant="h2" gutterBottom>Projects</Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
             Showcasing technical depth in SaaS, AI, and Enterprise Systems.
          </Typography>

          <Tabs 
            value={filter} 
            onChange={(_, val) => setFilter(val)} 
            sx={{ mb: 6 }}
            variant="scrollable"
          >
            {categories.map(cat => <Tab key={cat} label={cat} value={cat} />)}
          </Tabs>

          <Grid container spacing={4}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} md={6} key={project.id}>
                <Section sx={{ py: 0, height: '100%' }}>
                  <Box sx={{ 
                    p: 4, 
                    border: '1px solid', 
                    borderColor: 'divider', 
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="overline" color="secondary" fontWeight="bold">
                        {project.category}
                      </Typography>
                      {project.id === 'task-mgmt' && (
                        <Button
                          component="a"
                          href="https://github.com/BhashampallyPrudhviRaj/Todo"
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<GitHub />}
                          variant="outlined"
                          size="small"
                        >
                          Code
                        </Button>
                      )}
                    </Box>
                    <Typography variant="h4" gutterBottom>{project.title}</Typography>
                    <Typography paragraph color="text.secondary">
                      {project.description}
                    </Typography>
                    
                    {project.details && (
                      <Box sx={{ mt: 2, mb: 3, p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
                        <Typography variant="subtitle2" fontWeight="bold">Impact:</Typography>
                        <Typography variant="body2">{project.details.impact}</Typography>
                      </Box>
                    )}

                    <Box sx={{ mt: 'auto', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tech.map(t => (
                        <Chip key={t} label={t} size="small" variant="outlined" />
                      ))}
                    </Box>
                  </Box>
                </Section>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageTransition>
  );
};
