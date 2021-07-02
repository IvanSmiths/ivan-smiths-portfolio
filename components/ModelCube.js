import '@google/model-viewer';

const ModelCube = () => {
  return (
    <model-viewer
      class="cube-3d"
      loading="lazy"
      src="/3d-cube.glb"
      camera-orbit="52.88deg 57.51deg 4.752m"
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
