import '@google/model-viewer';

const Model = () => {
  return (
    <div className="cnt_model">
      <model-viewer
        defer
        id="reveal"
        class="model"
        loading="lazy"
        src="/robot.glb"
        autoplay
        animation-name="Running"
        shadow-intensity="1"
        ar
        camera-controls
        auto-rotate
        auto-rotate-delay="500"
        alt="3D model of a running robot"
      ></model-viewer>
    </div>
  );
};

export default Model;
