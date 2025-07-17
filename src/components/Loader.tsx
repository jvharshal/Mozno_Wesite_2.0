import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Loader() {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('loader-canvas')?.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 1);
    directional.position.set(5, 5, 5);
    scene.add(directional);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    const loader = new GLTFLoader();
    loader.load('/dist/mozno-logo-3d.glb', (gltf) => {
      const model = gltf.scene;
      model.scale.set(1.8, 1.8, 1.8);
      scene.add(model);

      const animate = () => {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    });

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[999]">
      <div id="loader-canvas" className="w-full h-full"></div>
    </div>
  );
}
