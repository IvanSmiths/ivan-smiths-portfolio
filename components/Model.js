import '@google/model-viewer';

const Model = () => {
  return (
    <div className="cnt_model">
      <model-viewer
        defer
        id="reveal"
        class="model"
        src="/3d-model-2.glb"
        ios-src="/3d-model.usdz"
        shadow-intensity="1"
        poster="/poster.png"
        ar
        camera-controls
        camera-orbit="-150.8deg 77.13deg 2.982m"
        auto-rotate
        auto-rotate-delay="500"
        alt="3D model of myself"
      ></model-viewer>
    </div>
  );
};

export default Model;
