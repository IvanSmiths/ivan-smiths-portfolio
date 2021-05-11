import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  let { t } = useTranslation();
  return (
    <footer className="footer">
      <div>
        <img
          className="draw"
          height="100"
          width="100"
          src="/myself-draw.jpg"
          alt="A draw of myself"
        />
        <strong className="medium-font highlight-main2">Ivan Smiths</strong>
        <strong className="small-font2">React Developer</strong>
        <div className="ico-cnt">
          <a href="https://github.com/IvanSmiths">
            <img
              height="24"
              width="24"
              loading="lazy"
              src="/github-ico-white.svg"
              alt="An icon of GitHub"
            />
          </a>
          <a href="https://www.artstation.com/ivansmiths">
            <img
              height="24"
              width="24"
              loading="lazy"
              src="/artstation-ico-white.svg"
              alt="An icon of ArtStation"
            />
          </a>
          <a href="https://www.instagram.com/ivan_smiths/">
            <img
              height="24"
              width="24"
              loading="lazy"
              src="/instagram-ico-white.svg"
              alt="An icon of Instagram"
            />
          </a>
          <img
            height="24"
            width="24"
            loading="lazy"
            src="/linkedin-ico-white.svg"
            alt="An icon of Linkedin"
          />
        </div>
      </div>
      <div>
        <ul className="links-footer">
          <Link href="/">
            <a>
              <li className="small-font2">{t('common:home')}</li>
            </a>
          </Link>
          <li className="small-font2">
            <Link href="/skills">
              <a>{t('common:skills')}</a>
            </Link>
          </li>

          <li className="small-font2">
            <Link href="/works">
              <a>{t('common:works')}</a>
            </Link>
          </li>
          <li className="small-font2">
            <Link href="/projects">
              <a>{t('common:projects')}</a>
            </Link>
          </li>
          <li className="small-font2">
            <Link href="/myself">
              <a>{t('common:myself')}</a>
            </Link>
          </li>
          <li className="small-font2">
            <Link href="/contact">
              <a>{t('common:contact')}</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-chat-cnt">
        <strong className="big-font2">{t('common:chat')}</strong>
        <p className="small-font-gray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          similique cupiditate provident omnis totam repudiandae perferendis quo
          ea placeat, deleniti tempore, laborum doloremque quae deserunt alias
          quasi doloribus velit culpa?
        </p>
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
