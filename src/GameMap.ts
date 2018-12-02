import * as THREE from './three.min';
import {GameObject} from './objects/GameObject';

export class GameMap {
  objects: GameObject[];

  constructor(public scene: THREE.Scene, public camera: THREE.Camera) {
    this.objects = [];
  }

  public static loadFromFile(filename): GameMap {
    // TODO: fill
    return null;
  }

  public static loadMesh(filename): GameMap {
    // TODO: fill
    return null;
  }
}