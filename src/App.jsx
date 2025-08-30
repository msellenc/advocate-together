import AppProvider from './components/AppProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Main App Component
const App = () => {
  return (
    <AppProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;