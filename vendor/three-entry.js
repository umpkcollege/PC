// Сборка Three.js для работы без интернета: всё нужное сайту — в одном обычном скрипте vendor/three.min.js.
// Модули с диска (file://) браузер не загружает, а обычный скрипт — загружает, поэтому собираем в IIFE.
// Пересобрать (нужен Node.js):
//   npm install three@0.160.0 esbuild
//   npx esbuild vendor/three-entry.js --bundle --minify --format=iife --legal-comments=eof --outfile=vendor/three.min.js
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

window.PCW_THREE = { THREE, OrbitControls, RoomEnvironment, GLTFLoader, RoundedBoxGeometry, mergeGeometries };
