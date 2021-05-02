import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Model = dynamic(
  () => {
    return import('./Model');
  },
  { ssr: false }
);

const Hero = () => {
  return (
    <header>
      <section className="cnt-hero">
        <div className="hero-1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            molestias optio blanditiis hic odit velit veritatis nihil, officia a
            dolorum?
          </p>
          <div className="hero-btn">
            <h2>Contact</h2>
            <h2>My works</h2>
          </div>
        </div>
        <div className="hero-2">
          <span className="aurora aurora-1"></span>
          <Model />
        </div>
      </section>
    </header>
  );
};

export default Hero;
