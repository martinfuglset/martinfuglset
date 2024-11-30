import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Cube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Transparent background
    renderer.setSize(800, 800);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry();

    // Function to get the appropriate edge color
    const getEdgeColor = () => {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDarkMode ? 0xffffff : 0x000000; // White in dark mode, black in light mode
    };

    // Create the wireframe (only edges, no fill)
    const edges = new THREE.EdgesGeometry(geometry);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: getEdgeColor() });
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

    // Handle dark mode changes dynamically
    const handleThemeChange = (e) => {
      const isDarkMode = e.matches;
      edgeMaterial.color.set(isDarkMode ? 0xffffff : 0x000000); // Update edge color
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-96 h-96 flex items-center justify-center aspect-square"
    ></div>
  );
};

export default Cube;
