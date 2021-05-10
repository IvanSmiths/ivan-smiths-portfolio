const ProjectHolycannoli = () => {
  return (
    <>
      <main className="holycannoli-cnt">
        <section className="project-title-cnt">
          <div>
            <h1 className="big-font2">
              PROJECT <br />{' '}
              <strong className="highlight-main2">HOLY CANNOLI!</strong>{' '}
            </h1>
            <h2 className="small-font2">Greedy.</h2>
          </div>
          <div>
            <img
              className="cannolo"
              height="300"
              width="300"
              src="/cannolo.jpg"
              alt="An image of a project"
            />
          </div>
        </section>
        <section className="pro-card-cnt">
          <div className="pro-card">
            <h2 className="small-font highlight">Type of project</h2>
            <h3 className="medium-font highlight-main">Real</h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">Stack</h2>
            <h3 className="medium-font highlight-main">
              Next.js, Blender, Zbrush
            </h3>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">GitHub Repo</h2>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/IvanSmiths/holy-cannoli"
            >
              <h3 className="medium-font highlight-main underline">
                Holy Cannoli Repo
              </h3>
            </a>
          </div>
          <div className="pro-card">
            <h2 className="small-font highlight">Project</h2>
            <a target="_blank" rel="noopener" href="https://holycannoli.xyz/">
              <h3 className="medium-font highlight-main underline">
                Holy Cannoli!
              </h3>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectHolycannoli;
