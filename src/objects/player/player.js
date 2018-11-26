


GameObject.list.push(class extends GameObjectVisible {
  constructor( game, data ) {
    super( game, data.x, data.y, Map.loadMesh(data.mesh) );
  }
})
