import Link from 'next/link';

const GetInTouch = () => {
  return (
    <section className="get-in-touch-cnt">
      <h2 className="medium-font">Get in touch.</h2>
      <p className="small-font">
        Have a project in mind? Looking for an estimate? Not sure about what you
        need? Simply submit an inquiry and fill out your requirements, and I
        will get back to you with solutions.
      </p>
      <Link href="/contact">
        <a>
          <h3 className="btn">Contact me</h3>
        </a>
      </Link>
    </section>
  );
};

export default GetInTouch;
