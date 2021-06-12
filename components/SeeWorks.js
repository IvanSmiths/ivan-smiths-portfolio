import React from 'react';
import Link from 'next/link';

const SeeWorks = () => {
  return (
    <section className="see-cnt">
      <h3 className="big-font">Want to see my stuff?</h3>
      <div className="see-cnt2">
        <a>
          <Link href="/works">
            <button className="btn">See my works</button>
          </Link>
        </a>
        <a>
          <Link href="/projects">
            <button className="btn">See my projects</button>
          </Link>
        </a>
      </div>
    </section>
  );
};

export default SeeWorks;
