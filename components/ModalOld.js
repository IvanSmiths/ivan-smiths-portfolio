import useTranslation from 'next-translate/useTranslation';

const ModalOld = ({ showModal2, setShowModal2 }) => {
  let { t } = useTranslation();
  return (
    <>
      <div className="modal-cnt">
        <div className="modal">
          <p className="small-font">
            My first website, also my old portfolio. Done in plain html
          </p>
          <ul className="list-project">
            <li className="small-font list-flex ">
              {t('projects:stack')}{' '}
              <span className="highlight-2 left-m">Html, Css, JavaScript.</span>
            </li>
            <li className="small-font">
              GitHub repo: {''}
              <a
                className="left-m highlight-main underline"
                target="_blank"
                rel="noopener"
                href="https://github.com/IvanSmiths/ivansmiths"
              >
                Ivan Smiths repo.
              </a>
            </li>
            <li className="small-font">
              Link: {''}
              <a
                className="left-m highlight-main underline"
                target="_blank"
                rel="noopener"
                href="https://ivansmiths.com/"
              >
                Ivan Smiths.
              </a>
            </li>
          </ul>
          <span
            className="close-modal"
            onClick={() => setShowModal2(!showModal2)}
          >
            X
          </span>
        </div>
      </div>
    </>
  );
};

export default ModalOld;
