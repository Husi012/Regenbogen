import { EventEmitter } from '../EventEmitter';
export class GameObject {
    constructor(game) {
        this.game = game;
        this.eventEmitter = new EventEmitter();
        this.frame = this.eventEmitter.get("frame");
        this.game.frame.subscribe(() => this.frame.trigger());
    }
}
GameObject.list = [];
export class GameObjectVisible extends GameObject {
    constructor(game, pos, mesh) {
        super(game);
        this.pos = pos;
        this.mesh = mesh;
        this.game.map.scene.add(this.mesh);
    }
}
export class GameObjectHolder {
    constructor(name, gameObject) {
        this.name = name;
        this.gameObject = gameObject;
    }
    create() {
        return new this.gameObject(...arguments);
    }
}
