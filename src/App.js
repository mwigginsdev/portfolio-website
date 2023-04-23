import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Layout from "./pages/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Work from "./pages/Work"
import NoPage from "./pages/NoPage"
import theme from "./Theme"

function App() {
  useEffect(() => {
    document.title = 'Wiggins.dev - Matt Wiggins';
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<About />} />
                  <Route path="work" element={<Work />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
          </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
