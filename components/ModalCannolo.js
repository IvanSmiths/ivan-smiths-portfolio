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
              {t('projects:stack')}{' '}
              <strong className="highlight-2 left-m">
                Next.Js, Blender, Zbrush.
              </strong>
            </li>
            <li className="small-font">
              GitHub repo: {''}
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/IvanSmiths/holy-cannoli"
              >
                <strong className="highlight-main underline left-m">
                  Holy Cannoli Repo.
                </strong>
              </a>
            </li>
            <li className="small-font">
              Link: {''}
              <a target="_blank" rel="noopener" href="https://holycannoli.xyz/">
                <strong className="highlight-main underline left-m">
                  Holy Cannoli!
                </strong>
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
