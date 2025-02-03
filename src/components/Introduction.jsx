import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function LogoModel() {
    const gltf = useGLTF('/Assets/logo.glb'); // Ensure to place the 3D logo file in the public folder
    // const box = new THREE.Box3().setFromObject(gltf.scene);
    // const center = box.getCenter(new THREE.Vector3());

    // gltf.scene.position.x += (gltf.scene.position.x - center.x);
    // gltf.scene.position.y += (gltf.scene.position.y - center.y);
    // gltf.scene.position.z += (gltf.scene.position.z - center.z);
    return <primitive object={gltf.scene} scale={1} />;
}

export default function Introduction() {
    return (<header className="Introduction">
        <div className="logoImage">
            <Canvas camera={{ position: [0, 0, 5] }} style={{ width: '100%', height: '100%' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} intensity={2} />
                <OrbitControls autoRotate autoRotateSpeed={6} />
                <LogoModel />
            </Canvas>
        </div>
        <p>I am <b>J. M Areeb Uzair</b>. I use Blender as a hobby, and also to create assets for various projects of mine. I have been using this software since 2022. You can see some of my finished projects here.</p>
        <span>Catch my other projects here: <a href="../" id="HUBlink">Project HUB</a></span>
    </header>)
}