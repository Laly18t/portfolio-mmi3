import './App.css'
import './assets/css/Header.css';
import './assets/css/Footer.css';
import './assets/css/Home.css';
import './assets/css/Project.css';

import NotFound from './pages/NotFound';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from './pages/Project';
import AllProjects from './pages/AllProjects';
import MentionsLegales from './pages/MentionsLegales';

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<AllProjects />} />
          <Route path="/projet/:projectId" element={<Project />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App