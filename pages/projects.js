import { useState } from 'react';
import ModalCannolo from '../components/ModalCannolo';
import ModalOld from '../components/ModalOld';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <main className="projects-cnt">
      <img
        className="project-img"
        height="400"
        onClick={() => setShowModal(!showModal)}
        src="/project-2.jpg"
        alt="An image of a project"
      />
      {showModal && (
        <ModalCannolo showModal={showModal} setShowModal={setShowModal} />
      )}
      <img
        className="project-img"
        height="400"
        onClick={() => setShowModal2(!showModal2)}
        src="/project-old.jpg"
        alt="An image of a project"
      />
      {showModal2 && (
        <ModalOld showModal2={showModal2} setShowModal2={setShowModal2} />
      )}
    </main>
  );
};

export default Projects;
