import '@google/model-viewer';

const Model = () => {
  return (
    <>
      <div className="cnt-model">
        <model-viewer
          id="reveal"
          poster="/poster.png"
          class="model"
          loading="lazy"
          src="3d-model.glb"
          alt="3D model of myself"
          camera-controls
          ar
          shadow-intensity="7.4"
          auto-rotate
        >
          <button slot="ar-button" id="ar-button">
            View in your space
          </button>
          <div id="ar-prompt">
            <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
          </div>
        </model-viewer>
      </div>
    </>
  );
};

export default Model;
