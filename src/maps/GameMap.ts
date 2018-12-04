import * as THREE from '../three.min';
import {GameObject} from '../objects/GameObject';
import * as MapFormat from './MapFormat';
import {Utils} from '../utils';

export class GameMap {
  objects: GameObject[];

  constructor(public scene: THREE.Scene, public camera: THREE.Camera) {
    this.objects = [];
  }

  public static async loadFromFile(filename): Promise<GameMap> {
    let raw = await Utils.readFile(filename);
    let map: MapFormat.Map = JSON.parse(raw);
    if (map) {
      // TODO: fill
    }
    return null;
  }

  public static loadMesh(filename): GameMap {
    // TODO: fill
    return null;
  }
}