import * as THREE from '../three.min';
import {EventEmitter, EventListener} from '../EventEmitter';
import Game from '../Game';


export class GameObject {
  eventEmitter: EventEmitter;
  frame: EventListener;
  constructor(protected game: Game) {
    this.eventEmitter = new EventEmitter();
    this.frame = this.eventEmitter.get("frame");
    this.game.frame.subscribe(() => this.frame.trigger());
  }
  public static list: GameObjectHolder[] = [];
}

export class GameObjectVisible extends GameObject {
  constructor(game: Game, private pos: THREE.Vector3, private mesh: THREE.Mesh ) {
    super( game );
    this.game.map.scene.add( this.mesh );
  }
}

export class GameObjectHolder {
  constructor(private name: String, private gameObject: any) { // TODO: find out which type I could use
  }
  create() {
    return new this.gameObject(...arguments);
  }
}
