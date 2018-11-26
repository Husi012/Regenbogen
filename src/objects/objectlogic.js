
class GameObject {
  constructor(mesh) {
    this.eventEmitter = new EventEmitter();
    this.create = this.eventEmitter.get("create");
    this.frame = this.eventEmitter.get("frame");
    GameService.frame.subscribe(() => this.frame.trigger());
  }
}
