import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const NetworkBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a3c5a,
      wireframe: true,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Create connection points
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x00ff00,
      size: 0.05,
    });

    const pointsPositions = [];
    const attacks = [];

    for (let i = 0; i < 100; i++) {
      const lat = Math.random() * Math.PI - Math.PI / 2;
      const lon = Math.random() * Math.PI * 2;
      const radius = 5;

      const x = radius * Math.cos(lat) * Math.cos(lon);
      const y = radius * Math.sin(lat);
      const z = radius * Math.cos(lat) * Math.sin(lon);

      pointsPositions.push(x, y, z);
    }

    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pointsPositions, 3));
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // Create attack lines
    const attackLines = new THREE.Group();
    scene.add(attackLines);

    camera.position.z = 10;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      earth.rotation.y += 0.001;
      points.rotation.y += 0.001;

      // Animate existing attacks
      attacks.forEach((attack, index) => {
        attack.currentPosition.lerp(attack.endPosition, 0.02);
        attack.line.geometry.setFromPoints([attack.startPosition, attack.currentPosition]);

        if (attack.currentPosition.distanceTo(attack.endPosition) < 0.1) {
          attackLines.remove(attack.line);
          attacks.splice(index, 1);
        }
      });

      // Create new attacks
      if (Math.random() < 0.05 && attacks.length < 20) {
        const startIndex = Math.floor(Math.random() * pointsPositions.length / 3);
        const endIndex = Math.floor(Math.random() * pointsPositions.length / 3);

        const startPosition = new THREE.Vector3(
          pointsPositions[startIndex * 3],
          pointsPositions[startIndex * 3 + 1],
          pointsPositions[startIndex * 3 + 2]
        );
        const endPosition = new THREE.Vector3(
          pointsPositions[endIndex * 3],
          pointsPositions[endIndex * 3 + 1],
          pointsPositions[endIndex * 3 + 2]
        );

        const attackGeometry = new THREE.BufferGeometry().setFromPoints([startPosition, startPosition]);
        const attackMaterial = new THREE.LineBasicMaterial({
          color: 0xff00ff,
          transparent: true,
          opacity: 0.6,
        });
        const attackLine = new THREE.Line(attackGeometry, attackMaterial);

        attackLines.add(attackLine);
        attacks.push({
          startPosition,
          currentPosition: startPosition.clone(),
          endPosition,
          line: attackLine,
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default NetworkBackground;