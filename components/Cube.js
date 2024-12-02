import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Cube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // Enable antialiasing for smoother edges
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(800, 800);

    // Improve rendering sharpness on high-resolution displays
    renderer.setPixelRatio(window.devicePixelRatio);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry();

    // Set a static edge color (e.g., black)
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const edges = new THREE.EdgesGeometry(geometry);
    const wireframe = new THREE.LineSegments(edges, edgeMaterial);
    scene.add(wireframe);

    let elapsedTime = 0;
    const rotationDuration = 8;

    const animate = (time) => {
      requestAnimationFrame(animate);
      elapsedTime = (time / 1000) % rotationDuration;
      const progress = (elapsedTime / rotationDuration) * Math.PI * 2;

      wireframe.rotation.x = Math.sin(progress) * Math.PI / 4;
      wireframe.rotation.y = progress;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-64 h-64 md:w-96 md:h-96 flex items-center justify-center aspect-square"
    ></div>
  );
};

export default Cube;
