import useTranslation from 'next-translate/useTranslation';

const WorksId = ({ showModalW, setShowModalW }) => {
  return (
    <>
      <div className="modal-cnt">
        <div className="modal">
          <h2 className="medium-font highlight-main">Holy Cannoli!</h2>
          <p className="small-font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            ratione perspiciatis fugit voluptate. Velit repellendus molestiae
            cupiditate beatae, enim aliquam veniam, illum corporis ullam quos
            corrupti minima quod. Ducimus, nihil.
          </p>
          <ul className="list-project">
            <li className="small-font list-flex ">Date:</li>
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
            onClick={() => setShowModalW(!showModalW)}
          >
            X
          </span>
        </div>
      </div>
    </>
  );
};

export default WorksId;
