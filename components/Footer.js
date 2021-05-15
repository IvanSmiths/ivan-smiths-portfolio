import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  let { t } = useTranslation();
  return (
    <footer className="footer">
      <div>
        <img
          loading="lazy"
          className="draw"
          height="100"
          width="100"
          src="/myself-draw.png"
          alt="A draw of myself"
        />
        <strong className="medium-font highlight-main2">Ivan Smiths</strong>
        <strong className="small-font2">{t('common:react')}</strong>
        <div className="ico-cnt">
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/IvanSmiths"
          >
            <img
              height="24"
              width="24"
              loading="lazy"
              src="/github-ico-white.svg"
              alt="An icon of GitHub"
            />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.artstation.com/ivansmiths"
          >
            <img
              height="24"
              width="24"
              loading="lazy"
              src="/artstation-ico-white.svg"
              alt="An icon of ArtStation"
            />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/ivan_smiths/"
          >
            <img
              height="24"
              width="24"
              loading="lazy"
              src="/instagram-ico-white.svg"
              alt="An icon of Instagram"
            />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://it.linkedin.com/in/ivan-fabbri-932aaa205?trk=people-guest_people_search-card"
          >
            <img
              height="24"
              width="24"
              loading="lazy"
              src="/linkedin-ico-white.svg"
              alt="An icon of Linkedin"
            />
          </a>
        </div>
      </div>
      <div>
        <ul className="links-footer">
          <li>
            <Link href="/">
              <a className="small-font2">{t('common:home')}</a>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <a className="small-font2">{t('common:skills')}</a>
            </Link>
          </li>

          <li>
            <Link href="/works">
              <a className="small-font2">{t('common:works')}</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="small-font2">{t('common:projects')}</a>
            </Link>
          </li>
          <li>
            <Link href="/myself">
              <a className="small-font2">{t('common:myself')}</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="small-font2">{t('common:contact')}</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-chat-cnt">
        <strong className="big-font2">{t('common:chat')}</strong>
        <p className="small-font-gray">{t('common:chat-desc')}</p>
        <span className="small-font-gray">
          {t('common:mail')} <br />{' '}
          <strong className="small-font2">info@ivansmiths.com</strong>
        </span>
        <ul className="copy">
          <li className="small-font-gray">
            &copy; 20201 Ivan Smiths. All rights reserved.
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
