import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeNeuralSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.warn("WebGL not supported", e);
      setError(true);
      return;
    }

    const width = containerRef.current.clientWidth || 500;
    const height = containerRef.current.clientHeight || 500;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 15;

    // Lights matching Official Palette
    const ambientLight = new THREE.AmbientLight(0x172B36, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xFFC801, 2.5); // Forsythia
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xFF9932, 4, 20); // Deep Saffron
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Inner Holographic Wireframe Core
    const coreGeometry = new THREE.IcosahedronGeometry(2.2, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x114C5A, // Nocturnal Expedition
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // Solid inner core for glowing center
    const innerCoreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xFFC801, // Forsythia gold
      transparent: true,
      opacity: 0.15,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    mainGroup.add(innerCoreMesh);

    // 2. Neural Nodes (Points)
    const nodeCount = 140;
    const nodeGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(nodeCount * 3);
    const originalPositions: number[][] = [];

    // Distribute nodes over a sphere surface
    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 4.0; // Radius of outer shell

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions.push([x, y, z]);
    }

    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom Canvas Texture for beautiful soft glowing nodes
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        grad.addColorStop(0, 'rgba(255, 200, 1, 1)'); // Forsythia
        grad.addColorStop(0.3, 'rgba(255, 153, 50, 0.8)'); // Deep Saffron
        grad.addColorStop(1, 'rgba(255, 250, 240, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(8, 8, 8, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0xFFC801, // Forsythia
      size: 0.28,
      transparent: true,
      opacity: 0.9,
      map: createCircleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    mainGroup.add(nodes);

    // 3. Neural Network Connections (Lines)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xD9E8E2, // Mystic Mint
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
    });

    // Generate indices for connections based on distance thresholds
    const lineIndices: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = originalPositions[i][0] - originalPositions[j][0];
        const dy = originalPositions[i][1] - originalPositions[j][1];
        const dz = originalPositions[i][2] - originalPositions[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 1.8 && connections < 3) {
          lineIndices.push(i, j);
          connections++;
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeometry.setIndex(lineIndices);

    const connectionsLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    mainGroup.add(connectionsLines);

    // 4. Ambient Orbiting Data Dust
    const dustCount = 200;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      const r = 5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      dustPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      dustPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      dustPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));

    const dustMaterial = new THREE.PointsMaterial({
      color: 0xD9E8E2, // Mystic Mint
      size: 0.08,
      transparent: true,
      opacity: 0.4,
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    mainGroup.add(dust);

    // Mouse interactive offsets
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Responsive Resizing
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      }
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Main slow rotations
      mainGroup.rotation.y = elapsedTime * 0.12;
      mainGroup.rotation.x = elapsedTime * 0.06;

      // Animate core pulsing slightly
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.04;
      coreMesh.scale.set(pulse, pulse, pulse);
      innerCoreMesh.scale.set(1 / pulse, 1 / pulse, 1 / pulse);

      // Node point wave distortion
      const posAttr = nodeGeometry.getAttribute('position') as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;
      for (let i = 0; i < nodeCount; i++) {
        const ix = i * 3;
        const ox = originalPositions[i][0];
        const oy = originalPositions[i][1];
        const oz = originalPositions[i][2];

        const wave = Math.sin(elapsedTime + ox * 0.5) * 0.06;
        array[ix] = ox + (ox / 4.0) * wave;
        array[ix + 1] = oy + (oy / 4.0) * wave;
        array[ix + 2] = oz + (oz / 4.0) * wave;
      }
      posAttr.needsUpdate = true;

      // Update connections geometry
      const connPosAttr = connectionsLines.geometry.getAttribute('position') as THREE.BufferAttribute;
      connPosAttr.needsUpdate = true;

      // Smooth mouse rotation follow
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      mainGroup.rotation.y += currentX * 0.35;
      mainGroup.rotation.x -= currentY * 0.35;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      resizeObserver.disconnect();

      coreGeometry.dispose();
      coreMaterial.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="absolute inset-0 radial-glow" />
        <div className="relative text-center p-8 space-y-4">
          <div className="w-20 h-20 rounded-full border border-forsythia/30 bg-oceanic-noir flex items-center justify-center mx-auto animate-pulse">
            <span className="w-12 h-12 rounded-full bg-forsythia/10 flex items-center justify-center text-forsythia font-bold">✔</span>
          </div>
          <p className="text-xs font-mono text-mystic-mint/60">Axiom Hologram Active (Standard Acceleration)</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-[380px] md:h-[450px] relative flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing block" />
      <div className="absolute inset-0 border border-forsythia/10 rounded-2xl pointer-events-none" />
      <div className="absolute top-4 left-4 font-mono text-[8px] text-forsythia/60 bg-oceanic-noir/80 px-2 py-1 rounded border border-forsythia/10 flex items-center gap-1.5 backdrop-blur">
        <span className="w-1 h-1 rounded-full bg-forsythia animate-ping" />
        WebGL 3D: COGNITIVE_CORE_ACTIVE
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[8px] text-mystic-mint/40 bg-oceanic-noir/80 px-2 py-1 rounded border border-nocturnal-expedition/30 backdrop-blur">
        GRID_ORIENT: AUTO
      </div>
    </div>
  );
}
