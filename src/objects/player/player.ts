import * as THREE from '../../three.min';
import {GameObject, GameObjectHolder, GameObjectVisible} from '../GameObject';
import {GameMap} from '../../maps/GameMap';


GameObject.list.push(new GameObjectHolder('player', class extends GameObjectVisible {
  constructor( game, data ) {
    super( game, new THREE.Vector3(data.x, data.y, data.z), GameMap.loadMesh(data.mesh) );
  }
}));
