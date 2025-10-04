
import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import AchievementsPage from './pages/AchievementsPage';
import NewsPage from './pages/NewsPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import RegisterPage from './pages/RegisterPage';
import LinksPage from './pages/LinksPage';
import MerchPage from './pages/MerchPage';
import NotFoundPage from './pages/NotFoundPage';
import EventDetailsPage from './pages/EventDetailsPage';
import PicnicPaymentPage from './pages/PicnicPaymentPage'; // Import the new page
import { ThemeProvider } from './contexts/ThemeContext';
import { ContentProvider, useContent } from './contexts/ContentContext';

const Layout: React.FC = () => {
  const { isLoading } = useContent();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-mukesa-black">
        <div className="text-center">
            <svg className="animate-spin h-10 w-10 text-mukesa-blue mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-lg font-semibold text-gray-700 dark:text-mukesa-gray-text">Loading Content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-mukesa-black">
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
    <ContentProvider>
      <ThemeProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="events" element={<EventsPage />} />
              <Route path="events/:eventId" element={<EventDetailsPage />} />
              <Route path="events/payment/picnic" element={<PicnicPaymentPage />} />
              <Route path="achievements" element={<AchievementsPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="merch" element={<MerchPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="links" element={<LinksPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </ContentProvider>
  );
};

export default App;