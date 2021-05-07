import useTranslation from 'next-translate/useTranslation';

const ModalCannolo = ({ showModal, setShowModal }) => {
  let { t } = useTranslation();
  return (
    <>
      <div className="modal-cnt">
        <div className="modal">
          <h2 className="medium-font highlight-main">Holy Cannoli!</h2>
          <p className="small-font">{t('projects:cannolo')}</p>
          <img
            className="qr-code"
            height="200"
            width="200"
            src="qr-code.svg"
            alt="An image of a Qr-Code"
            loading="lazy"
          />
          <ul className="list-project">
            <li className="small-font list-flex ">
              Stack used:
              <img
                height="38"
                width="38"
                src="/nextjs-ico.svg"
                alt="An icon of GitHub"
                loading="lazy"
              />
              <img
                height="38"
                width="38"
                src="/blender-ico.svg"
                alt="An icon of GitHub"
                loading="lazy"
              />
              <img
                height="38"
                width="38"
                src="/zbrush-ico.png"
                alt="An icon of GitHub"
                loading="lazy"
              />
            </li>
            <li className="small-font">
              GitHub repo: {''}
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/IvanSmiths/holy-cannoli"
              >
                <img
                  height="38"
                  width="38"
                  src="/github-ico.svg"
                  alt="An icon of GitHub"
                  loading="lazy"
                />
              </a>
            </li>
            <li className="small-font">
              Link: {''}
              <a target="_blank" rel="noopener" href="https://holycannoli.xyz/">
                <img
                  height="38"
                  width="38"
                  src="/favicon-32.png"
                  alt="A favicon of a project"
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
          <span
            className="close-modal"
            onClick={() => setShowModal(!showModal)}
          >
            X
          </span>
        </div>
      </div>
    </>
  );
};

export default ModalCannolo;
