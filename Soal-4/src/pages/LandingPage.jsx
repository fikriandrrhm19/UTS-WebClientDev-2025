import Navbar from '../components/layout/Navbar';
import Hero from '../components/features/Hero/Hero';
import About from '../components/features/About';
import RecentWork from '../components/features/RecentWork/RecentWork';
import Thoughts from '../components/features/Thoughts/Thoughts';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <RecentWork />
      <Thoughts />
      <Footer />
    </div>
  );
};

export default LandingPage;