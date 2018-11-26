/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nlet scene = new THREE.Scene();\r\nlet camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, .1, 1000 );\r\n\r\nlet renderer = new THREE.WebGLRenderer();\r\n\r\ndocument.body.appendChild( renderer.domElement );\r\n\r\nlet cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );\r\nlet greenMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );\r\nlet cube = new THREE.Mesh( cubeGeometry, greenMaterial );\r\n\r\nlet lineGeometry = new THREE.Geometry();\r\nlineGeometry.vertices.push(new THREE.Vector3( -10, 0, 0) );\r\nlineGeometry.vertices.push(new THREE.Vector3( 0, 10, 0) );\r\nlineGeometry.vertices.push(new THREE.Vector3( 10, 0, 0) );\r\n\r\nlet line = new THREE.Line( lineGeometry, greenMaterial );\r\n\r\n\r\nscene.add( cube );\r\nscene.add( line );\r\n\r\n//camera.position.z = 5;\r\ncamera.position.set( 0, 0, 50 );\r\ncamera.lookAt( 0, 0, 0 );\r\n\r\n\r\nfunction updateSize() {\r\n  let width = window.innerWidth;\r\n  let height = window.innerHeight;\r\n  renderer.setSize( width, height );\r\n  camera.aspect = width / height;\r\n  camera.updateProjectionMatrix();\r\n  console.log(\"updated the size\")\r\n}\r\nwindow.addEventListener( 'resize', updateSize );\r\nupdateSize();\r\n\r\n\r\nfunction gameLoop() {\r\n  requestAnimationFrame( gameLoop );\r\n\r\n  gameFrame();\r\n\r\n  renderer.render( scene, camera);\r\n}\r\n\r\ngameLoop();\r\n\r\n\r\n\r\nfunction gameFrame() {\r\n  cube.rotation.x += 0.01;\r\n  cube.rotation.y += 0.01;\r\n  camera.position.z -= 0.5;\r\n\r\n  if (camera.position.z <= 0) {\r\n    camera.position.z = 50;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n//\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5sZXQgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIC4xLCAxMDAwICk7XHJcblxyXG5sZXQgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xyXG5cclxubGV0IGN1YmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMSwgMSwgMSApO1xyXG5sZXQgZ3JlZW5NYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHgwMGZmMDAgfSApO1xyXG5sZXQgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKCBjdWJlR2VvbWV0cnksIGdyZWVuTWF0ZXJpYWwgKTtcclxuXHJcbmxldCBsaW5lR2VvbWV0cnkgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxubGluZUdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoIC0xMCwgMCwgMCkgKTtcclxubGluZUdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEwLCAwKSApO1xyXG5saW5lR2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMyggMTAsIDAsIDApICk7XHJcblxyXG5sZXQgbGluZSA9IG5ldyBUSFJFRS5MaW5lKCBsaW5lR2VvbWV0cnksIGdyZWVuTWF0ZXJpYWwgKTtcclxuXHJcblxyXG5zY2VuZS5hZGQoIGN1YmUgKTtcclxuc2NlbmUuYWRkKCBsaW5lICk7XHJcblxyXG4vL2NhbWVyYS5wb3NpdGlvbi56ID0gNTtcclxuY2FtZXJhLnBvc2l0aW9uLnNldCggMCwgMCwgNTAgKTtcclxuY2FtZXJhLmxvb2tBdCggMCwgMCwgMCApO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XHJcbiAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgbGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICByZW5kZXJlci5zZXRTaXplKCB3aWR0aCwgaGVpZ2h0ICk7XHJcbiAgY2FtZXJhLmFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0O1xyXG4gIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgY29uc29sZS5sb2coXCJ1cGRhdGVkIHRoZSBzaXplXCIpXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB1cGRhdGVTaXplICk7XHJcbnVwZGF0ZVNpemUoKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGdhbWVMb29wICk7XHJcblxyXG4gIGdhbWVGcmFtZSgpO1xyXG5cclxuICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEpO1xyXG59XHJcblxyXG5nYW1lTG9vcCgpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lRnJhbWUoKSB7XHJcbiAgY3ViZS5yb3RhdGlvbi54ICs9IDAuMDE7XHJcbiAgY3ViZS5yb3RhdGlvbi55ICs9IDAuMDE7XHJcbiAgY2FtZXJhLnBvc2l0aW9uLnogLT0gMC41O1xyXG5cclxuICBpZiAoY2FtZXJhLnBvc2l0aW9uLnogPD0gMCkge1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSA1MDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });