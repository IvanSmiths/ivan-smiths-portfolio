import { useState } from 'react';
import ModalCannolo from '../components/ModalCannolo';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="projects-cnt">
      <img
        onClick={() => setShowModal(!showModal)}
        src="/project-2.jpg"
        alt="An image of a project"
      />
      {showModal && (
        <ModalCannolo showModal={showModal} setShowModal={setShowModal} />
      )}
    </main>
  );
};

export default Projects;
