import { Hero } from './components/Hero';
import { VisionMission } from './components/VisionMission';
import { Features } from './components/Features';
import { Reasons } from './components/Reasons';
import { Steps } from './components/Steps';
import Reliability from './components/Reliability';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {Navbar} from "./components/Navbar.tsx";

export const App = () => {
    return (
        <div>
            <Navbar/>
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