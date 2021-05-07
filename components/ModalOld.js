import React from 'react';

const ModalOld = ({ showModal2, setShowModal2 }) => {
  return (
    <>
      <div className="modal-cnt">
        <div className="modal">
          <p className="small-font">
            My first website, also my old portfolio. Done in plain html
          </p>
          <ul className="list-project">
            <li className="small-font list-flex ">
              Stack used:
              <img
                height="38"
                width="38"
                src="/html-ico.svg"
                alt="An icon of GitHub"
                loading="lazy"
              />
              <img
                height="38"
                width="38"
                src="/css-ico.svg"
                alt="An icon of GitHub"
                loading="lazy"
              />
            </li>
            <li className="small-font">
              GitHub repo: {''}
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/IvanSmiths/ivansmiths"
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
              <a
                target="_blank"
                rel="noopener"
                href="https://www.ivansmiths.com/"
              >
                <img
                  height="38"
                  width="38"
                  src="/favicon-old.png"
                  alt="A favicon of a project"
                  loading="lazy"
                />
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
