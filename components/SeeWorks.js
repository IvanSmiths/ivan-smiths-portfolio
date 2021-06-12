import React from 'react';
import Link from 'next/link';

const SeeWorks = () => {
  return (
    <section className="see-cnt">
      <h3 className="big-font">Want to see my stuff?</h3>
      <a className="btn">
        <Link href="/works">Works</Link>
      </a>
    </section>
  );
};

export default SeeWorks;
