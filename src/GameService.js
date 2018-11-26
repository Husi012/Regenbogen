

class Game() {
  constructor() {
    this._setupRenderer();
    this.map = null;
    this.eventEmitter = new EventEmitter();
    this.frame = this.eventEmitter.get( "frame" );
  }
  _setupRenderer() {
    this.renderer = new THREE.WebGLRenderer();
    document.body.appendChild( this.renderer.domElement );
    window.addEventListener("resize", () => {
      this.adjustSize();
    });
  }
  adjustSize(width, height) { // TODO: only available for one camera at once
    width = width || window.innerWidth;
    height = height || window.innerHeight;
    this.renderer.setSize(width, height);
    let camera = this.getCamera();
    if (camera) {
      camera.aspect( width / height );
      camera.updateProjectionMatrix();
    }
  }
  getCamera() { // TODO: only available for one camera at once
    if ( this.map ) {
      return this.map.scene.camera;
    }
    return null;
  }
  loadScene( name ) {
    this.map = Map.loadFromFile( `maps/${name}.json` );
  }
  start() {
    this._animation();
  }
  _animation() {
    if (this.map) {
      requestAnimationFrame( this._animation );
      this.frame.trigger();
      this.renderer.render( this.map.scene, this.map.camera );
    }
  }
}
