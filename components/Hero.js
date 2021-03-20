import React from 'react';
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
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, non.
        </div>
        <div>
          <Model />
        </div>
        <div>
          <h1>
            IVAN <br /> SMITHS.
          </h1>
        </div>
      </section>
    </header>
  );
};

export default Hero;
