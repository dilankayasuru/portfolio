
import { useGLTF } from '@react-three/drei';
import { Material, Mesh } from 'three';

useGLTF.preload('/assets/typescript.glb');

export function TypescriptLogo() {

    const { nodes, materials } = useGLTF('/assets/typescript.glb', 'https://www.gstatic.com/draco/v1/decoders/') as unknown as {
        nodes: Record<string, Mesh>;
        materials: Record<string, Material>;
    };

    return (
        <group dispose={null}>
            <group scale={0.7}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube033.geometry}
                    material={materials.Material}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve.geometry}
                    material={materials['Material.034']}
                    position={[0.272, -0.275, 0.121]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={6.014}
                />
            </group>
        </group>
    )
}