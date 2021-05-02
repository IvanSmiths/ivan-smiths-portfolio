import '@google/model-viewer';

const ModelCube = () => {
  return (
    <model-viewer
      className="cube-3d"
      src="/3d-cube.glb"
      camera-orbit="52.88deg 57.51deg 4.752m"
      poster="model/poster-cube.png"
      camera-controls
      ar
      auto-rotate
      auto-rotate-delay="100"
      alt="A 3D model of a cube."
      orbit-sensitivity="0.5"
    ></model-viewer>
  );
};

export default ModelCube;
