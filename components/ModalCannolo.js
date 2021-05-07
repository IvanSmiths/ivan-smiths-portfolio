import React from 'react';

const ModalCannolo = ({ showModal, setShowModal }) => {
  return (
    <>
      <div className="modal-cnt">
        <div className="modal">
          <p className="small-font">
            Just a 3D cannolo, visible in your space if your phone support
            augmented reality. Done with Next.Js and Blender as a 3D modeling
            tool. Is hosted on Vercel. Maybe someone have found this Qr-Code
            around some cities...
          </p>
          <img
            className="qr-code"
            height="200"
            width="200"
            src="qr-code.svg"
            alt=""
          />
          <ul className="list-project">
            <li className="small-font list-flex ">
              Stack used:
              <img
                height="38"
                width="38"
                src="/nextjs-ico.svg"
                alt="An icon of GitHub"
              />
              <img
                height="38"
                width="38"
                src="/blender-ico.svg"
                alt="An icon of GitHub"
              />
              <img
                height="38"
                width="38"
                src="/zbrush-ico.png"
                alt="An icon of GitHub"
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
