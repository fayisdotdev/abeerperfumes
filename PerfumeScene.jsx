import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function makeBottleShape(width, height, radius) {
  const shape = new THREE.Shape();
  const left = -width / 2;
  const right = width / 2;
  const bottom = -height / 2;
  const top = height / 2;

  shape.moveTo(left + radius, bottom);
  shape.lineTo(right - radius, bottom);
  shape.quadraticCurveTo(right, bottom, right, bottom + radius);
  shape.lineTo(right, top - radius);
  shape.quadraticCurveTo(right, top, right - radius, top);
  shape.lineTo(left + radius, top);
  shape.quadraticCurveTo(left, top, left, top - radius);
  shape.lineTo(left, bottom + radius);
  shape.quadraticCurveTo(left, bottom, left + radius, bottom);

  return shape;
}

function resolveCssColor(value) {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("Unable to resolve theme colors for the 3D scene.");
  context.fillStyle = value;
  context.fillRect(0, 0, 1, 1);
  const [red, green, blue] = context.getImageData(0, 0, 1, 1).data;
  return `rgb(${red}, ${green}, ${blue})`;
}

function createLabelTexture(paper, ink, fontFamily) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 320;
  const context = canvas.getContext("2d");
  if (!context) return null;

  context.fillStyle = paper;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = ink;
  context.globalAlpha = 0.28;
  context.lineWidth = 2;
  context.strokeRect(22, 22, 468, 276);
  context.globalAlpha = 1;
  context.fillStyle = ink;
  context.textAlign = "center";
  context.font = `700 66px "${fontFamily}"`;
  context.fillText("Abeer", 256, 150);
  context.font = `500 30px "${fontFamily}"`;
  context.fillText("Perfumes", 256, 206);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function createBottle(paper, paperTwo, paperThree, ink, accent, fontFamily) {
  const bottle = new THREE.Group();
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(paperThree),
    metalness: 0.08,
    roughness: 0.1,
    transparent: true,
    opacity: 0.32,
    clearcoat: 0.85,
    clearcoatRoughness: 0.1,
    transmission: 0.28,
    thickness: 0.5,
    side: THREE.DoubleSide,
  });
  const liquidMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(accent),
    metalness: 0.18,
    roughness: 0.24,
    clearcoat: 0.8,
    transparent: true,
    opacity: 0.76,
  });
  const bottleShape = makeBottleShape(1.74, 2.45, 0.24);
  const bodyGeometry = new THREE.ExtrudeGeometry(bottleShape, {
    depth: 0.44,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 1,
    bevelSize: 0.075,
    bevelThickness: 0.07,
  });
  bodyGeometry.translate(0, 0, -0.22);
  const body = new THREE.Mesh(bodyGeometry, glassMaterial);
  bottle.add(body);

  const liquidShape = makeBottleShape(1.48, 1.7, 0.18);
  const liquidGeometry = new THREE.ExtrudeGeometry(liquidShape, {
    depth: 0.25,
    bevelEnabled: true,
    bevelSegments: 4,
    bevelSize: 0.035,
    bevelThickness: 0.04,
  });
  liquidGeometry.translate(0, 0, -0.125);
  const liquid = new THREE.Mesh(liquidGeometry, liquidMaterial);
  liquid.position.y = -0.3;
  bottle.add(liquid);

  const neckMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(paperTwo),
    metalness: 0.38,
    roughness: 0.28,
  });
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.39, 0.32, 48), neckMaterial);
  neck.position.set(0, 1.33, 0);
  bottle.add(neck);

  const capMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(ink),
    metalness: 0.42,
    roughness: 0.22,
    clearcoat: 0.75,
  });
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.37, 0.38, 0.5, 48), capMaterial);
  cap.position.set(0, 1.73, 0);
  bottle.add(cap);

  const capBand = new THREE.Mesh(
    new THREE.CylinderGeometry(0.39, 0.39, 0.045, 48),
    new THREE.MeshStandardMaterial({
      color: new THREE.Color(paper),
      metalness: 0.52,
      roughness: 0.25,
    }),
  );
  capBand.position.set(0, 1.52, 0);
  bottle.add(capBand);

  const labelTexture = createLabelTexture(paper, ink, fontFamily);
  if (labelTexture) {
    const label = new THREE.Mesh(
      new THREE.PlaneGeometry(1.18, 0.74),
      new THREE.MeshBasicMaterial({
        map: labelTexture,
        side: THREE.DoubleSide,
      }),
    );
    label.position.set(0, 0.08, 0.31);
    bottle.add(label);
  }

  const glintMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(paper),
    metalness: 0.22,
    roughness: 0.24,
    transparent: true,
    opacity: 0.58,
  });
  for (const x of [-0.69, 0.69]) {
    const glint = new THREE.Mesh(new THREE.BoxGeometry(0.025, 1.92, 0.024), glintMaterial);
    glint.position.set(x, -0.04, 0.263);
    bottle.add(glint);
  }

  bottle.position.y = -0.3;
  return bottle;
}

function createPedestal(paper, paperThree, accent) {
  const pedestal = new THREE.Group();
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(1.12, 1.2, 0.16, 96),
    new THREE.MeshStandardMaterial({
      color: new THREE.Color(accent),
      metalness: 0.26,
      roughness: 0.32,
    }),
  );
  base.position.y = -1.62;
  pedestal.add(base);

  const lip = new THREE.Mesh(
    new THREE.TorusGeometry(1.1, 0.014, 6, 96),
    new THREE.MeshStandardMaterial({
      color: new THREE.Color(paper),
      metalness: 0.32,
      roughness: 0.3,
    }),
  );
  lip.rotation.x = Math.PI / 2;
  lip.position.y = -1.52;
  pedestal.add(lip);

  return pedestal;
}

function PerfumeScene() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const tokens = getComputedStyle(document.documentElement);
    const token = (name) => tokens.getPropertyValue(name).trim();
    const paper = resolveCssColor(token("--color-paper"));
    const paperTwo = resolveCssColor(token("--color-paper-2"));
    const paperThree = resolveCssColor(token("--color-paper-3"));
    const ink = resolveCssColor(token("--color-ink"));
    const accent = resolveCssColor(token("--color-accent"));
    const fontFamily = token("--font-display").split(",")[0].replaceAll('"', "").trim();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 50);
    camera.position.set(0, 0.1, 8.6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    host.dataset.ready = "true";
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.14;
      renderer.setClearColor(new THREE.Color(paper), 0);
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const ambient = new THREE.HemisphereLight(new THREE.Color(paper), new THREE.Color(ink), 2.2);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(new THREE.Color(paper), 4.5);
    keyLight.position.set(-4, 5, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(new THREE.Color(paperTwo), 3.8);
    rimLight.position.set(4, 1.8, -3);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(new THREE.Color(accent), 2.4, 10);
    fillLight.position.set(3.2, -1.3, 3);
    scene.add(fillLight);

    const bottle = createBottle(paper, paperTwo, paperThree, ink, accent, fontFamily);
    scene.add(bottle);
    scene.add(createPedestal(paper, paperThree, accent));

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.position.z = width < 520 ? 9.2 : 8.6;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.render(scene, camera);
    };

    const renderFrame = (time = 0) => {
      if (!reduceMotion.matches) {
        bottle.rotation.y = Math.sin(time * 0.00036) * 0.1;
      } else {
        bottle.rotation.set(0, 0, 0);
      }
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(renderFrame);
    };

    const startAnimation = () => {
      window.cancelAnimationFrame(frame);
      if (reduceMotion.matches) {
        bottle.rotation.set(0, 0, 0);
        renderer.render(scene, camera);
        return;
      }
      frame = window.requestAnimationFrame(renderFrame);
    };

    const onMotionChange = () => startAnimation();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    reduceMotion.addEventListener("change", onMotionChange);
    resize();
    startAnimation();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      reduceMotion.removeEventListener("change", onMotionChange);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          for (const material of materials) {
            material.map?.dispose();
            material.dispose();
          }
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="perfume-scene" ref={hostRef}>
      <svg className="perfume-scene__fallback" viewBox="0 0 360 420" aria-hidden="true">
        <ellipse cx="180" cy="370" rx="108" ry="17" />
        <rect x="103" y="125" width="154" height="218" rx="25" />
        <rect x="137" y="77" width="86" height="64" rx="10" />
        <rect x="131" y="59" width="98" height="23" rx="7" />
        <rect className="perfume-scene__label" x="125" y="210" width="110" height="66" />
        <text x="180" y="239">Abeer</text>
        <text className="perfume-scene__small" x="180" y="259">Perfumes</text>
      </svg>
    </div>
  );
}

export default PerfumeScene;
