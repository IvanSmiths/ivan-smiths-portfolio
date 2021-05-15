import '@google/model-viewer';

const Model = () => {
  return (
    <div className="cnt_model">
      <model-viewer
        defer
        id="reveal"
        class="model"
        loading="lazy"
        src="/trees.glb"
        poster="/trees.png"
        ar
        camera-controls
        auto-rotate
        auto-rotate-delay="500"
        alt="3D model of some trees"
      ></model-viewer>
    </div>
  );
};

export default Model;
