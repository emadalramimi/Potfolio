import React, { lazy } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Navigation from './common/components/Navigation/Navigation';
import Footer from './common/components/Footer/Footer';
import CampaignBanner from './pages/Misc/CampaignBanner';
import { LoadingSpinner } from './common/components/UIElements/loadingAnimations';

/**
 * Lazy loading of components
 */
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Skills = lazy(() => import('./pages/Skills/Skills'));
const Projects = lazy(() => import('./pages/Work/components/Projects'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NotFound = lazy(() => import('./pages/404/404'));
const ProfileRedirect = lazy(() =>
  import('./features/ProfileRedirect/ProfileRedirect')
);
const Profiles = lazy(() => import('./pages/Profiles/Profiles'));
const ProjectItem = lazy(() => import('./pages/Work/projects/ProjectItem'));
const Events = lazy(() => import('./pages/Events/Events'));
const PrivacyPolicy = lazy(() => import('./pages/Misc/PrivacyPolicy'));
const Achievements = lazy(() => import('./pages/Achievements/Achievements'));

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <CampaignBanner />
        <Navigation />
        <React.Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:repoName" element={<ProjectItem />} />
            <Route path="/profiles/:profile" element={<ProfileRedirect />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/events" element={<Events />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
