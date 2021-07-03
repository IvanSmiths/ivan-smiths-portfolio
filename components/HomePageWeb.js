import Link from 'next/link';

const HomePageWeb = () => {
  return (
    <section className="services-cnt">
      <div className="services-left">
        <h2 className="tiny-font">WHAT I DO</h2>
      </div>
      <div className="services-center">
        <h2 className="large-font">WEBSITES</h2>
        <img src="./website.png" alt="" />
      </div>
      <div className="services-right">
        <div>
          <p className="small-font">
            From the physical shop owners, to the marletplace owners on Etsy,
            everyone needs a Website/Landing page in order to promote their
            business on Google Ads and reach THOUSANDS of targeted clients.
            <br />
            <br />
            No-profits owners can also use the Landing page for accepting
            donations via PayPal, Credit/Debit Card and even cryptocurrencies.
          </p>
          <Link href="/contact">
            <a className="small-font btn">Let's talk about this</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageWeb;
