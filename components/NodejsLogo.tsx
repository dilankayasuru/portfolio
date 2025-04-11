import { useGLTF } from '@react-three/drei';
import { Material, Mesh } from 'three';

export function NodejsLogo() {
    const { nodes, materials } = useGLTF('/assets/nodejs.glb') as unknown as {
        nodes: Record<string, Mesh>;
        materials: Record<string, Material>;
    };
    return (
        <group dispose={null}>
            <group scale={0.7}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube011.geometry}
                    material={materials['Material.044']}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve003.geometry}
                    material={materials['Material.001']}
                    position={[0, -0.066, 0.095]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={5.154}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/assets/nodejs.glb');