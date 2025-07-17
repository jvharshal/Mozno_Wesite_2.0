import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FinancialEducationPage from './pages/FinancialEducationPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200); // 3-D loader visible
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/*" element={<ServicesPage />} />
        <Route path="/educate" element={<FinancialEducationPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
      </Routes>
    </Layout>
  );
}
