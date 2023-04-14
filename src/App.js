import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Work from "./pages/Work"
import NoPage from "./pages/NoPage"
import theme from "./Theme"

function App() {
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
