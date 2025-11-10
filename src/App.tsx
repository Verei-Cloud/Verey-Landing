import { Hero } from './components/Hero';
import { VisionMission } from './components/VisionMission';
import { Features } from './components/Features';
import { Reasons } from './components/Reasons';
import { Steps } from './components/Steps';
import Reliability from './components/Reliability';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => {
    return (
        <div className="bg-body text-dark">
            {/* плавающие фоновые круги */}
            <div className="floating-dot floating-dot-1" />
            <div className="floating-dot floating-dot-2" />
            <div className="floating-dot floating-dot-3" />
            <Hero />
            <VisionMission />
            <Features />
            <Reasons />
            <Steps />
            <Reliability />
            <Contact />
            <Footer />
        </div>
    );
};