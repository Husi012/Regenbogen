

class Game() {
  constructor(size) {
    this._setupRenderer();
    this.map = null;
  }
  _setupRenderer() {
    this.renderer = new THREE.WebGLRenderer();
  }
  loadScene(name) {
    this.map = Map.loadFromFile(`maps/${name}.json`);
  }
}

GameService = (function() {
  let renderer, scene, camera;
  renderer = renderer;
  scene = null;
  camera = null;
  eventEmitter = new EventEmitter();
  return {
    set scene(s) {
      scene = s;
    },
    set camera(c) {
      camera = c;
    },
    frame:
  }
}) {
  constructor(renderer) {

  }

}
