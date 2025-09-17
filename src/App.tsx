import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import AchievementsPage from './pages/AchievementsPage';
//import NewsPage from './pages/NewsPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import RegisterPage from './pages/RegisterPage';
import LinksPage from './pages/LinksPage';
import NotFoundPage from './pages/NotFoundPage';
import MerchPage from './pages/MerchPage';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-mukesa-bg">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="merch" element={<MerchPage />} />
          {/* <Route path="news" element={<NewsPage />} /> */}
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="links" element={<LinksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;