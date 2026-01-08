import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorModeProvider } from './contexts/ColorModeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import { Box } from '@mui/material';

function App() {
  return (
    <ColorModeProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ColorModeProvider>
  );
}

export default App;
