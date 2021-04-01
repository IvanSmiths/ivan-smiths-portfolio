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
        <div className="hero-3">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <h1>
              IVAN <br /> SMITHS.
            </h1>
          </motion.div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
