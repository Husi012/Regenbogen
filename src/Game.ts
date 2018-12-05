import * as THREE from './three.min'
import { GameMap } from './maps/GameMap';
import { EventEmitter, EventListener } from './EventEmitter';

export default class Game {
  public map: GameMap;
  private eventEmitter: EventEmitter;
  public frame: EventListener;
  private renderer: THREE.WebGLRenderer;
  constructor() {
    this._setupRenderer();
    this.map = null;
    this.eventEmitter = new EventEmitter();
    this.frame = this.eventEmitter.get( "frame" );
  }
  _setupRenderer() {
    this.renderer = new THREE.WebGLRenderer();
    document.body.appendChild( this.renderer.domElement );
    window.addEventListener( "resize", () => {
      this.adjustSize();
    });
  }
  adjustSize( width = window.innerWidth, height = window.innerHeight ) { // TODO: only available for one camera at once
    this.renderer.setSize( width, height );
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
  async loadScene( name ) {
    this.map = await GameMap.loadFromFile( `maps/${name}.json` );
  }
  start() {
    this._animation();
  }
  _animation() {
    if ( this.map ) {
      requestAnimationFrame( this._animation );
      this.frame.trigger();
      this.renderer.render( this.map.scene, this.map.camera );
    }
  }
}
