class GameObject {
    constructor(game) {
        this.eventEmitter = new EventEmitter();
        this.frame = this.eventEmitter.get("frame");
        GameService.frame.subscribe(() => this.frame.trigger());
    }
}
class GameObjectVisible extends GameObject {
    constructor(game, pos, mesh) {
        super(game);
        this.pos = pos;
        this.mesh = mesh;
        this.game.map.scene.add(this.mesh);
    }
}
class GameObjectHolder {
    constructor(name, gameObject) {
        this.name = name;
        this.gameObject = gameObject;
    }
    create() {
        return new this.gameObject(...arguments);
    }
}
GameObject.list = [];
